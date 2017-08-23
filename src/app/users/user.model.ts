import { Plant } from '../plant/plant.model';

export class User {

  constructor(private username: string,
              private email: string,
              private password: string,
              private location: string,
              private garden: Plant[]){}
}
