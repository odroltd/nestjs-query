import { Ref, mongoose, prop } from '@typegoose/typegoose';
import { TestReference } from './test-reference.entity';

export class TestEntity {
  _id: mongoose.Types.ObjectId;

  @prop({ required: true })
  stringType!: string;

  @prop({ required: true })
  referenceName!: string;

  @prop({ required: true })
  boolType!: boolean;

  @prop({ required: true })
  numberType!: number;

  @prop({ required: true })
  dateType!: Date;

  @prop()
  testReference?: Ref<TestReference>;

  @prop()
  testReferences?: Ref<TestReference>;
}
