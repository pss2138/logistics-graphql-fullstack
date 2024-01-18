const baseColumns = {
  id: {
    primary: true,
    type: "varchar",
    generated: true,
  },
  adminComment: {
    type: "varchar",
    length: 300,
    nullable: true,
  },
  createdAt: {
    type: "timestamp with time zone",
  },
  updatedAt: {
    type: "timestamp with time zone",
  },
  isDeleted: {
    type: "boolean",
    default: false,
  },
  deletedAt: {
    type: "timestamp with time zone",
  },
};

export default baseColumns;
