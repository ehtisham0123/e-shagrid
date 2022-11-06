import { IsEmail, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsPhoneNumber, IsPostalCode, IsString, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @Length(4, 40)
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  firstname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  lastname: string;

  @ApiProperty()
  @IsString()
  @Length(4, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  age: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  contact: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  housenumber?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  streetnumber?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  postalcode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  latitude: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsLongitude()
  longitude: string;
}
