// Definición de una interfaz llamada `Usuario`
export interface Usuario {
    // Propiedad `nombre`:
    // - Es de tipo `string`, pero también puede ser `null` o `undefined`.
    // - Representa el nombre del usuario.
    nombre: string | null | undefined;
  
    // Propiedad `password`:
    // - Es de tipo `string`, pero también puede ser `null` o `undefined`.
    // - Representa la contraseña del usuario.
    password: string | null | undefined;
  
    // Propiedad `email`:
    // - Es de tipo `string`, pero también puede ser `null` o `undefined`.
    // - Representa el correo electrónico del usuario.
    email: string | null | undefined;
  }
  