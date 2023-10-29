import crypto from 'crypto'

const algorithm = 'aes-256-cbc'
const key = Buffer.from('your-secret-key-goes-here'); // Должен быть 32 байта
const iv = crypto.randomBytes(16); // IV должен быть 16 байт

// Шифрование
const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('your-password', 'utf8', 'hex')
encrypted += cipher.final('hex')

// Расшифровка
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')