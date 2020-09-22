using { workflow.orglevel } from '../db/data-model';

service CatalogService {


entity Country as projection on orglevel.Country;
entity Employee as projection on orglevel.Employee;
entity Department as projection on orglevel.Department;
entity Survey as projection on orglevel.Survey;
entity Temperature as projection on orglevel.Temperature;
entity productionReport as projection on orglevel.productionReport;

  //entity Books @readonly as projection on bookshop.Books;
  //entity Authors @readonly as projection on bookshop.Authors;
  //entity Orders @insertonly as projection on bookshop.Orders;
}