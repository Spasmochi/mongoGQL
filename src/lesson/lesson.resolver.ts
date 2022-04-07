import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  Lesson() {
    return {
      id: '1',
      name: 'Lesson 1',
      startDate: '2020-01-01',
      endDate: '2020-01-02',
    };
  }
}
