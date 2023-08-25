import crypto from 'crypto'

export abstract class Entity<T> {
  protected _id: string;
  public props: T;
 //props pra receber quais as propriedades da entity

  get id() { 
    return this._id 
  }

  constructor(props: T, id?: string) {
    //se passar id ta criando referencia de entidade que ja existe, se não cria id pra nova entity 
    this.props = props;
    this._id = id ?? crypto.randomUUID()
  }
}