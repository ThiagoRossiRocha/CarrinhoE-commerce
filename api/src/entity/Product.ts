import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product {
    static findAll() {
        throw new Error("Method not implemented.")
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    price: number

}
