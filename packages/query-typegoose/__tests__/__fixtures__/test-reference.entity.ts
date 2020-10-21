import { mongoose, prop, Ref } from '@typegoose/typegoose';
import { TestEntity } from './test.entity';

export class TestReference {
  _id: mongoose.Types.ObjectId;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  referenceName!: string;

  @prop()
  testEntity?: Ref<TestEntity>;
}
