import { Injectable } from '@nestjs/common';
import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from '@casl/ability';
import { Plan } from '@repo/types';

class User {
  id!: string;
  email!: string;
  planId!: string;
}

export class Chatbot {
  count!: number;
}

export class Document {
  count!: number;
}

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects = InferSubjects<typeof User | typeof Chatbot | typeof Document | 'all'>;

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  createForUser(user: User & { plan: Plan }) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(Ability as AbilityClass<AppAbility>);

    if (user.plan.name === 'free') {
      can(Action.Create, Chatbot, { count: { $lt: user.plan.maxChatbots } });
      can(Action.Create, Document, { count: { $lt: user.plan.maxDocuments } });
    } else if (user.plan.name === 'premium') {
      can(Action.Manage, 'all');
    }

    return build({
      detectSubjectType: (item) => item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}