require('dotenv').config();
const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const validator = require('validator');
const bcrypt = require('bcryptjs');

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hola mundo")
});

// ENDPOINTS USUARIOS
app.get("/usuarios", async (req, res) => {
    const usuarios = await prisma.user.findMany()
    res.json(usuarios)
})

app.post("/crearUsuario", async (req, res) => {
    const { nombre, correo, contrasena } = req.body

    try {
        if (!nombre || !correo || !contrasena) {
            return res.status(400).json({ message: "Error. Ingresa todos los datos necesarios." });
        }

        const correoNormalizado = correo.trim().toLowerCase();

        const usuarioExiste = await prisma.user.findUnique({
            where: { correo: correoNormalizado },
        });
        if (usuarioExiste) {
            return res.status(400).json({ message: "Error. Este correo ya está registrado a un usuario. Por favor, pruebe con otro." });
        }

        if (!/^[a-zA-Z0-9._-]{3,20}$/.test(nombre.trim())) {
            return res.status(400).json({
                message: "El nombre de usuario solo puede contener letras, números, puntos, guiones y guiones bajos (3 a 20 caracteres)."
            });
        }


        if (!validator.isEmail(correoNormalizado)) {
            return res.status(400).json({ message: "Error. Formato de correo inválido." });
        }

        if (!validator.isStrongPassword(contrasena, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })) {
            return res.status(400).json({
                message: "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
            });
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const newUser = await prisma.user.create({
            data: {
                nombre: nombre.trim(),
                correo: correoNormalizado,
                contrasena: hashedPassword,
            },
        });
        const { contrasena: _, ...userWithoutPassword } = newUser;

        res.status(201).json({
            message: "Usuario registrado correctamente.",
            user: userWithoutPassword,
        });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.put("/usuario/:id", async (req, res) => {
    const { id } = req.params
    const { nombre, correo, contrasena } = req.body

    if (!nombre && !correo && !contrasena) {
        return res.status(400).json({ message: "Error. Se debe ingresar al menos un dato para actualizar." });
    }


    try {
        const usuarioExistente = await prisma.user.findUnique({
            where: { id: Number(id) },
        });
        if (!usuarioExistente) {
            return res.status(404).json({ message: "Error. Usuario no encontrado." });
        }

        const updatedData = {};
        if (nombre) {
            if (!/^[a-zA-Z0-9._-]{3,20}$/.test(nombre.trim())) {
                return res.status(400).json({
                    message: "El nombre de usuario solo puede contener letras, números, puntos, guiones y guiones bajos (3 a 20 caracteres)."
                });
            }
            updatedData.nombre = nombre.trim();
        }

        if (correo) {
            let correoNormalizado = correo.trim().toLowerCase();
            if (!validator.isEmail(correoNormalizado)) {
                return res.status(400).json({ message: "Error. El correo no tiene un formato válido." });
            }

            const emailInUse = await prisma.user.findFirst({
                where: {
                    correo: correoNormalizado,
                    NOT: { id: Number(id) },
                },
            });

            if (emailInUse) {
                return res.status(400).json({ message: "Error. Este correo ya está registrado por otro usuario." });
            }

            updatedData.correo = correoNormalizado;
        }
        
        if (contrasena) {
            if (!validator.isStrongPassword(contrasena, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            })) {
                return res.status(400).json({
                    message: "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
                });
            }

            updatedData.contrasena = await bcrypt.hash(contrasena, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: updatedData,
        });

        const { contrasena: _, ...userWithoutPassword } = updatedUser;

        res.status(200).json({
            message: "Usuario actualizado correctamente.",
            user: userWithoutPassword,
        });
    } catch (error) {
        console.error("Error actualizando usuario:", error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
});

app.delete("/usuario/:id", async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.delete({
        where: { id: Number(id) }
    })
    res.json("Eliminado correctamente")
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")
}); 