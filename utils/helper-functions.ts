import jwt from 'jsonwebtoken';


export function getDaySuffix(dateString:string) {
    const formattedDate: string = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    .format(new Date(dateString))
    .replace(/(\d)(?=(\d{2})+\b)/g, '$1')
    .replace(/\b(\d{1,2})\b/g, '$1' + (["th", "st", "nd", "rd"][(/1?$/.test(RegExp.$1) ? 0 : parseInt(RegExp.$1, 10) % 10) <= 3 ? parseInt(RegExp.$1, 10) % 10 : 0]));
  
  return formattedDate;
  

  }


  interface DecodedTokenPayload {
    exp: number;
    // Add other claims if necessary
  }
  
  interface DecodedToken {
    payload: DecodedTokenPayload;
    // Add other properties from the header if necessary
  }

  export const checkTokenExpiration = (token: string | null): boolean => {
    try {
  
      if (!token) {
        // Token is not available
        return true;
      }
  
      const decodedToken: DecodedToken = jwt.decode(token, { complete: true }) as DecodedToken;
      // console.log(decodedToken)
  
      if (!decodedToken || !decodedToken.payload.exp) {
        // Token is invalid, malformed, or does not have an expiration claim
        return true;
      }
  
      // Check if the token has expired
      const currentTimestamp: number = Math.floor(Date.now() / 1000);
      if (decodedToken.payload.exp < currentTimestamp) {
        // Token has expired
        return true;
      }
  
      // Token is valid and has not expired
      return false;
    } catch (error) {
      // An error occurred while decoding the token
      console.error('Error decoding JWT token:', error);
      return true;
    }
  };


  export function canShowWitness (transaction:any,user:any){


    if(transaction?.witnessesDetails.find((userr: any) => userr?.id === user?.id) && transaction?.history?.find((record: any) => {
      return (
        record?.phase?.phaseName === "lenderDecision" &&
        record?.value === "accept"
      );
    }) && !transaction?.history?.find(
      (record: any) => record?.user?.id === user?.id
    ) ){

      return true
    }

    return false
  

  }


  export const sleepNow = (delay:number) => new Promise((resolve) => setTimeout(resolve, delay))

  export function getColor (title:string){

    const firstLetter = title?.charAt(0)?.toUpperCase()

    const colorMapping:any = {
      A:"bg-primary-50 text-primary-700",
      B:"bg-secondary-50 text-secondary-700",
      C:"bg-danger-50 text-danger-700",
      D:"bg-warning-50 text-warning-700",
      E:"bg-success-50 text-success-700",
      F:"bg-info-50 text-info-700",
      G:"bg-pink-50 text-pink-700",
      H:"bg-purple-50 text-purple-700",
      I:"bg-orange-50 text-orange-700",
      J:"bg-primary-50 text-primary-700",
      K:"bg-secondary-50 text-secondary-700",
      L:"bg-danger-50 text-danger-700",
      M:"bg-warning-50 text-warning-700",
      N:"bg-success-50 text-success-700",
      O:"bg-info-50 text-info-700",
      P:"bg-pink-50 text-pink-700",
      Q:"bg-purple-50 text-purple-700",
      R:"bg-orange-50 text-orange-700",
      S:"bg-primary-50 text-primary-700",
      T:"bg-secondary-50 text-secondary-700",
      U:"bg-danger-50 text-danger-700",
      V:"bg-warning-50 text-warning-700",
      W:"bg-success-50 text-success-700",
      X:"bg-info-50 text-info-700",
      Y:"bg-pink-50 text-pink-700",
      Z:"bg-orange-50 text-orange-700"
    }

    return colorMapping[firstLetter] || 'bg-orange-50 text-orange-700'
  
  }


 