export type Step = {id:string;title:string;description:string;category:string};
export const steps:Step[] = [
{id:'housing',title:'Settle into your accommodation',description:'Check your contract, handover notes and address.',category:'Housing'},
{id:'anmeldung',title:'Complete address registration',description:'Check local requirements and whether you need an appointment.',category:'Bureaucracy'},
{id:'insurance',title:'Confirm your insurance coverage',description:'Verify activation and keep insurance card information handy.',category:'Healthcare'},
{id:'banking',title:'Set up banking and payments',description:'Check identity verification and documents required by your provider.',category:'Essentials'},
{id:'permit',title:'Review your residence permit status',description:'Check your local immigration authority and your individual deadlines.',category:'Bureaucracy'},
{id:'university',title:'Complete university onboarding',description:'Review your enrolment, student ID and semester transport benefits.',category:'Studies'}];
export const cities = ['Berlin','Bremen','Hamburg','Munich','Frankfurt am Main','Cologne','Stuttgart','Düsseldorf','Leipzig','Dresden','Hannover','Aachen','Other German city'];
export const cityInfo:Record<string,{registration:string;permit:string;label:string}>={
'Berlin':{registration:'https://service.berlin.de/dienstleistung/120686/',permit:'https://service.berlin.de/',label:'ServicePortal Berlin'},
'Bremen':{registration:'https://www.service.bremen.de/dienstleistungen/registering-your-place-of-residence-when-moving-from-abroad-145790',permit:'https://www.service.bremen.de/',label:'Service Bremen'},
'Hamburg':{registration:'https://www.hamburg.de/service/suche/wohnsitzanmeldung/',permit:'https://www.hamburg.de/service/',label:'Hamburg Service'},
'Munich':{registration:'https://stadt.muenchen.de/service/info/wohnsitzanmeldung/1063475/n0/',permit:'https://stadt.muenchen.de/service/',label:'München Service'}};
export function localLinks(city:string){return cityInfo[city] ?? {registration:'https://verwaltung.bund.de/leistungsverzeichnis/en/leistung/99115005104000',permit:'https://verwaltung.bund.de/',label:'German federal services — select your municipality'};}
export const documentGroups=[
 {id:'registration',name:'Address registration',items:['Valid passport or national ID (as applicable)','Wohnungsgeberbestätigung from your housing provider','Other certificates if requested by your local authority'],note:'Requirements and appointment rules differ by municipality.'},
 {id:'bank',name:'Bank account',items:['Valid ID or passport','Address details and proof, if requested','Student/enrolment confirmation, if applicable','Tax identification number, if required by provider'],note:'Each bank has its own identification and eligibility process.'},
 {id:'residence',name:'Residence permit',items:['Valid passport and existing immigration documents','University enrolment confirmation','Proof of funds, as applicable','Proof of health insurance','Biometric photo or digital photo as required'],note:'This is a preparation overview, not a complete official checklist.'},
 {id:'health',name:'Healthcare visit',items:['Health insurance card or proof of coverage','Medication list and relevant prior findings','Referral, if required for that specialist'],note:'For life-threatening emergencies call 112; urgent non-emergency service: 116117.'}];
export const housing=[{name:'WG-Gesucht',type:'Shared flats & sublets',url:'https://www.wg-gesucht.de/'},{name:'Studierendenwerke',type:'Student residences',url:'https://www.studierendenwerke.de/'},{name:'Kleinanzeigen',type:'Local rooms & rentals',url:'https://www.kleinanzeigen.de/'},{name:'ImmoScout24',type:'Private flats',url:'https://www.immobilienscout24.de/'},{name:'HousingAnywhere',type:'Medium-term furnished',url:'https://housinganywhere.com/'}];
