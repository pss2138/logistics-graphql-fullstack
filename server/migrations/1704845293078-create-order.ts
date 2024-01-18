import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderTable1635692362744 implements MigrationInterface {
  name = "CreateOrderTable1635692362744";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ORDER",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "adminComment",
            type: "varchar",
            length: "300",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp with time zone",
          },
          {
            name: "updatedAt",
            type: "timestamp with time zone",
          },
          {
            name: "isDeleted",
            type: "boolean",
            default: false,
          },
          {
            name: "deletedAt",
            type: "timestamp with time zone",
          },
          {
            name: "orderStatus",
            type: "enum",
            enum: [
              "initOrdered",
              "purchasedFGRN",
              "deliveryOrdered",
              "trackingNumFGRNEntered",
              "trackingNumUsaEntered",
              "deliveryCompleted",
              "purchaseConfirmed",
              "purchaseCanceled",
            ],
            default: "initOrdered",
          },
          {
            name: "orderedAt",
            type: "timestamp with time zone",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "orderNumFrgn",
            type: "varchar",
            length: "30",
          },
          {
            name: "trackingNumUsa",
            type: "varchar",
            length: "30",
          },
          {
            name: "buyerName",
            type: "varchar",
            length: "30",
          },
          {
            name: "receiverName",
            type: "varchar",
            length: "30",
          },
          {
            name: "personalCustomsIdNum",
            type: "varchar",
            length: "30",
          },
          {
            name: "buyerPhone",
            type: "varchar",
            length: "11",
          },
          {
            name: "deliveryAddress",
            type: "varchar",
            length: "200",
          },
          {
            name: "deliveryMsg",
            type: "varchar",
            length: "500",
          },
          {
            name: "productName",
            type: "varchar",
            length: "100",
          },
          {
            name: "amount",
            type: "int",
            default: 0,
          },
          {
            name: "option",
            type: "varchar",
            length: "100",
          },
          {
            name: "memo",
            type: "varchar",
            length: "1000",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ORDER");
  }
}
