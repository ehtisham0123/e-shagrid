import { ApiProperty } from '@nestjs/swagger';

export class Teacher {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'Ehtisham123' })
  name: string;
  @ApiProperty({ example: 'ehtishamjadoon1234@gmail.com' })
  email: string;
  @ApiProperty({ example: 'Ehtisham' })
  firstname: string;
  @ApiProperty({ example: 'Khan' })
  lastname: string;
  @ApiProperty({ example: 'Ehtisham123' })
  password: string;
  @ApiProperty({ example: 'male' })
  gender: string;
  @ApiProperty({ example: '23' })
  age: string;
  @ApiProperty({ example: '03459550902' })
  contact: string;
  @ApiProperty({ example: 'profile.png' })
  avatar: string;
  @ApiProperty({ example: '1' })
  housenumber: string;
  @ApiProperty({ example: '2' })
  streetnumber: string;
  @ApiProperty({ example: 'Abbottabad' })
  city: string;
  @ApiProperty({ example: 'KPK' })
  state: string;
  @ApiProperty({ example: '22120' })
  postalcode: string;
  @ApiProperty({ example: 'Pakistan' })
  country: string;
  @ApiProperty({ example: '34.1688' })
  latitude: string;
  @ApiProperty({ example: '73.2215' })
  longitude: string;
  @ApiProperty({ example: '2022-11-05T11:08:19.861Z' })
  createdAt: Date;
  @ApiProperty({ example: '2022-11-05T11:08:19.861Z' })
  updatedAt: Date;
}
