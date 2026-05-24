export class GetUserQueryDto {
  page?: number;
  limit?: number;

  name?: string;
  email?: string;

  age?: number;
  ageGt?: number;
  ageLt?: number;
}