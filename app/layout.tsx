import type {Metadata} from 'next';
export const metadata:Metadata={title:'Coral Stays',description:'Alojamientos y administración del Caribe dominicano'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
