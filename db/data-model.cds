namespace workflow.orglevel;

entity Country {
  key countryId : Integer;
  countries : Composition of many Department on countries.country = $self;
  countryName : String;
  currency : String;
  region : String;
}

entity Department {
  key departmentId : Integer;
  description : String;
  division : String;
  region : String;
  country : Association to Country;
  Employees : Composition of many Employee on Employees.departmentId = $self;
}

entity Employee {
  key ID : Integer;
  description   : String;
  departmentId  : Association to Department;
  region   : String;
  country   : String;
  location   : String;
  email   : String;
  managerId   : Integer;
  jobTitle   : String;
  jobRole   : String;
}

entity Survey {
  key ID : UUID;
  email : String;
  department : String;
  submitDate : Date ; 
  statusA : Boolean;
  statusB : Boolean;
  statusC: Boolean;
  statusD: Boolean;
  statusBComment : String;
  statusD_Train : Boolean;
  statusD_TrainNumber: String;
  statusD_HSR: Boolean;
  statusD_HSRNumber: Integer;
  statusD_MRT: Boolean;
  statusD_MRT_start: String;
  statusD_MRT_end: String;
}

entity Temperature {
  key ID : UUID;
  email : String;
  department : String;
  submitDate : Date ; 
  foreheadTemp : Boolean; 
  earTemp : Boolean;
  armTemp: Boolean;
  temperature : Decimal(3,1)
}

entity productionReport{
  key ID		: UUID;
  workorderid	: String;
  operation		: String;
  email 		: String;
  department	: String;
  workstation	: String;
  workProcess	: String;
  submitDate	: DateTime ;
  duration		: Time;
  material		: String;
  piece			: Integer
}






