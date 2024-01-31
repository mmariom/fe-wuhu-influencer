// types.ts
// export interface FormData {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   phoneNumber: string;
//   phoneCode: string;
//   firstName: string;
//   lastName: string;
//   street: string;      // Add this
//   city: string;        // Add this
//   postalCode: string;  // Add this
//   country: string;     
 
// }


// types.ts

export interface CompanyData {
  companyName?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  companyRegNumber?: string;
}


export interface FormData {
  email: string;
  password: string;
  phoneNumber: string;
  phoneCode: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  confirmPassword?: string; // Make optional if not needed for submission
  postalCode: string;
  country: string;
  isBusinessUser: boolean;
  company?: CompanyData; // Make optional
}



// export interface AddressData {
//   street: string;
//   city: string;
//   postalCode: string;
//   country: string;
// }

//  export interface CompanyData {
//   companyName: string;
//   street: string;
//   city: string;
//   postalCode: string;
//   country: string;
//   companyRegNumber: string;
// }

// export interface FormData {
//   email: string;
//   password: string;
//   phoneNumber: string;
//   phoneCode: string;
//   firstName: string;
//   lastName: string;
//   address: AddressData;
//   confirmPassword: string;
//   isBusinessUser: boolean;
//   company?: CompanyData; // Make company field optional
// }
