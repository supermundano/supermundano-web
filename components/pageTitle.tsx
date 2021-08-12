import { createGlobalStyle} from "styled-components";
import Link from 'next/link'


const GlobalStylePageTitle = createGlobalStyle`
    .page-title, .page-title *{
        font-size: 1.4rem !important;
        color: white;
        margin: 0 !important;
        font-weight: 400 !important;
        .title-secondary{
            color: #4E4E4E;
            margin-left: 1rem;
        }
    }
`;



export default function PageTitle() {

    return(
        <div>
            <GlobalStylePageTitle/>
            <h3 className="page-title">
                <Link href="/">
                    <a>SUPERMUNDANO ® <span className="title-secondary">CREATIVE BRANDS IN CONTEXT</span></a>
                </Link>
            </h3>
        </div>
    )
}