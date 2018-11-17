/**
 * @author Vaibhavi Prajapati
 *@property id: uniqueIdentifier for order
 *@property name: name of order
 *@property quantity: qunatity of the item
 *@property size: size of the item
 *@property price: price of the item
 *@property email: email of person who give the order
 *@property phone: phone number of person
 *@property address: adddress of Person where he/she live
 *@property city: city of person where he/she live
 *@property state: state where person is live
 */
export class Order {
  id: number;
  name: string;
  quantity: number;
  size: string;
  price: number;
  email: string;
  phone: number;
  address: string;
  city: string;
  state: string;
}
