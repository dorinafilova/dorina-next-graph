import { PrismaClient } from "@prisma/client";

export type Context = {
    prisma: PrismaClient;
  };
  export const resolvers = {
    Query: {
      //get novel by id
      novel: async (_parent: any, args: any, context: Context) => {
        return await context.prisma.novel.findUnique({
          where: {
            id: args.id,
          },
        });
      },
      // get all novels
      novels: async (_parent: any, _args: any, context: Context) => {
        return await context.prisma.novel.findMany({
          include: { author: true },
        });
      },
    },
    // nested resolve function to get auhtors in novels
    Novel: {
      author: async (parent: any, _args: any, context: Context) => {
        return await context.prisma.author.findMany({
          where: {
            novelId: parent.id,
          },
        });
      },
    },
    Mutation: {
      // add novel
      addNovel: async (_parent: any, args: any, context: Context) => {
        return await context.prisma.novel.create({
          data: {
            title: args.title,
            image: args.image,
          },
        });
      },
      // update novel
      updateNovel: async (_parent: any, args: any, context: Context) => {
        return await context.prisma.novel.update({
          where: {
            id: args.id,
          },
          data: {
            title: args.title,
            image: args.image,
          },
        });
      },
      // delete novel
      deleteNovel: async (parent: any, args: any, context: Context) => {
        return await context.prisma.novel.delete({
          where: {
            id: args.id,
          },
        });
      },
      // add author
      addAuthor: async (parent: any, args: any, context: Context) => {
        return await context.prisma.author.create({
          data: {
            novelId: args.novelId,
            name: args.name,
          },
        });
      },
      // delete author
      deleteAuthor: async (_arent: any, args: any, context: Context) => {
        return await context.prisma.author.delete({
          where: {
            id: args.id,
          },
        });
      },
    },
  };