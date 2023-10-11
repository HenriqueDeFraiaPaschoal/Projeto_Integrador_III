// app.js
import { createUser, findUserByEmail } from "../models/userModel";
import { hashPassword, comparePassword } from "../etc/passwordUtils";

const router = express.Router();

// Rota de Registro de Usuário
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifique se o usuário já existe com o mesmo email
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "Email já registrado." });
    }

    // Hash da senha antes de salvar no banco de dados
    const hashedPassword = await hashPassword(password);

    const newUser = await createUser({
      email,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro no registro de usuário:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

// Rota de Login de Usuário
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    // Aqui você pode gerar um token de autenticação (JWT) e enviá-lo como resposta
    // para permitir que o usuário faça login em sessões futuras.

    res.status(200).json({ message: "Login bem-sucedido." });
  } catch (error) {
    console.error("Erro no login de usuário:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

export default router;