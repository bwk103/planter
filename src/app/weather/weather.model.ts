export class Weather {

  constructor(
              private location: string,
              private date: string,
              private summary: string,
              private icon: string,
              private rainfall: string
            ){}
}
