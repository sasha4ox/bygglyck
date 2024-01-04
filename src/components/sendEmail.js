export default async function sendEmail(props) {
    const isEmpty = Object.values(props).every(x => x === null || x === '');
    if (isEmpty) return;
    try {
       const url =  new URL('https://api.elasticemail.com/v2/email/send');
       const settings = {
         apikey: '1EF43F93F9B811CC630E9DCF96065A20EBD0148FE2551B2F2B880878DD30D487BA459EBD31AF690B9BBC4382B0D23873',
         subject: "subject TEST",
         from:'info@bygglyck.se',
         to: "bygglyck@gmail.com",
         bodyText: "Text Body TEST",
         bodyHtml: `
         <p>country: ${props.state}</p>
         <p>address: ${props.address}</p>
         <p>municipality: ${props.municipality}</p>
         <p>region: ${props.region}</p>
         <p>zip: ${props.zip}</p>
         <p>first and lastname: ${props.firstAndLastname}</p>
         `,
         isTransactional: true
       }
       url.search = new URLSearchParams(settings);
       
       console.log('url', url)
       const response = await fetch(url, {
         method: "POST", // *GET, POST, PUT, DELETE, etc.
         mode: "cors", // no-cors, *cors, same-origin
         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
         credentials: "same-origin", // include, *same-origin, omit
         headers: {
           "Content-Type": "application/json",
           // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         redirect: "follow", // manual, *follow, error
         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //  body: JSON.stringify(settings), // body data type must match "Content-Type" header
       });
       console.log('RESPONSE', await response.json())
    } catch (error) {
     console.log('ERROR', error);
    }
   } 
  