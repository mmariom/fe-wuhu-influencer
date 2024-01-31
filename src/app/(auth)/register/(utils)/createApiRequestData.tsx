import { CompanyData, FormData } from "@/components/registration/types";

// export const createApiRequestData = (formData: FormData) => {
//     const apiRequestData = {
//       email: formData.email,
//       password: formData.password,
//       phoneNumber: `${formData.phoneCode}${formData.phoneNumber}`,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: {
//         street: formData.street,
//         city: formData.city,
//         postalCode: formData.postalCode,
//         country: formData.country,
//       },
//       isBusinessUser: formData.isBusinessUser,
//       company: formData.isBusinessUser ? { ...formData.company } : undefined,
//     };
  
//     return apiRequestData;
//   };
  


  export const createApiRequestData = (formData: FormData) => {
    const apiRequestData: any = {
      email: formData.email,
      password: formData.password,
      phoneNumber: `${formData.phoneCode}${formData.phoneNumber}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: {
        street: formData.street,
        city: formData.city,
        postalCode: formData.postalCode,
        country: formData.country,
      },
      isBusinessUser: formData.isBusinessUser,
    };
  
    if (formData.isBusinessUser && formData.company) {
      apiRequestData.company = {
        companyName: formData.company.companyName,
        street: formData.company.street,
        city: formData.company.city,
        postalCode: formData.company.postalCode,
        country: formData.company.country,
        companyRegNumber: formData.company.companyRegNumber,
      };
    }
  
    return apiRequestData;
  };
  