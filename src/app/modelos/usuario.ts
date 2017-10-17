export class Usuario {
  constructor(
    public nombre: string,
    public apellidos: string,
    public email: string,
    public password: string,
    public tipo: string,
    public imagen: string,
    public fechaRegistro: Date,
    public seguidos: any
  ){}
}
