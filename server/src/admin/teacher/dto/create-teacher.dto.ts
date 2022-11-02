import { IsEmail, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsPhoneNumber, IsPostalCode, IsString, Length, Matches } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(4, 40)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  lastname: string;

  @IsString()
  @Length(4, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  age: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsString()
  @IsOptional()
  housenumber?: string;

  @IsOptional()
  @IsString()
  streetnumber?: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsNotEmpty()
  @IsString()
  postalcode: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsLatitude()
  latitude: string;

  @IsNotEmpty()
  @IsLongitude()
  longitude: string;
}
