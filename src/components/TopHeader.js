import "../styles/TopHeader.css";

function TopHeader() {
  return (
    <div className="topHeader">
    <div class="container">
      <ul class="custom-header-languages">
        <li class="lang-item lang-item-49 lang-item-fr lang-item-first">
          <a
            lang="fr-FR"
            hreflang="fr-FR"
            href="https://bank-of-africa.net/"
          >
            fr
          </a>
        </li>
        <li class="lang-item lang-item-52 lang-item-en current-lang">
          <a
            lang="en-GB"
            hreflang="en-GB"
            href="https://bank-of-africa.net/en/home/"
          >
            en
          </a>
        </li>
      </ul>
      <div class="custom-header-sites-list">
        <span class="custom-header-sites-link">ALL BOA WEBSITES</span>
        <div class="custom-header-sites-dropdown">
          <ul>
            <li>
              <a
                href="https://www.boabenin.com/"
                class="benin"
                target="_blank"
              >
                BENIN
              </a>
            </li>
            <li>
              <a
                href="https://www.boaburkinafaso.com/"
                class="butkina-faso"
                target="_blank"
              >
                BURKINA FASO
              </a>
            </li>
            <li>
              <a
                href="https://boacoteivoire.com/"
                class="code-divoire"
                target="_blank"
              >
                COTE D'IVOIRE
              </a>
            </li>
            <li>
              <a href="https://boaghana.com/" class="ghana" target="_blank">
                GHANA
              </a>
            </li>
            <li>
              <a
                href="https://www.boakenya.com/"
                class="kenya"
                target="_blank"
              >
                KENYA
              </a>
            </li>
            <li>
              <a
                href="https://www.boa.mg/"
                class="madagascar"
                target="_blank"
              >
                MADAGASCAR
              </a>
            </li>
            <li>
              <a
                href="https://www.boamali.com/"
                class="mali"
                target="_blank"
              >
                MALI
              </a>
            </li>
            <li>
              <a
                href="https://www.boamerrouge.com/"
                class="mer-rouge"
                target="_blank"
              >
                MER ROUGE
              </a>
            </li>
            <li>
              <a
                href="https://www.boaniger.com/"
                class="niger"
                target="_blank"
              >
                NIGER
              </a>
            </li>
            <li>
              <a
                href="https://boauganda.com/"
                class="ouganda"
                target="_blank"
              >
                OUGANDA
              </a>
            </li>
            <li>
              <a
                href="https://www.boa-rdc.com/"
                class="rdc"
                target="_blank"
              >
                RDC
              </a>
            </li>
            <li>
              <a
                href="https://www.boarwanda.com/"
                class="rwanda"
                target="_blank"
              >
                RWANDA
              </a>
            </li>
            <li>
              <a
                href="https://www.boasenegal.com/"
                class="senegal"
                target="_blank"
              >
                SENEGAL
              </a>
            </li>
            <li>
              <a
                href="https://boatanzania.com/"
                class="tanznie"
                target="_blank"
              >
                TANZANIE
              </a>
            </li>
            <li>
              <a
                href="https://www.boatogo.com/"
                class="togo"
                target="_blank"
              >
                TOGO
              </a>
            </li>
            <li>
              <a
                href="https://www.boafrance.com/"
                class="france"
                target="_blank"
              >
                FRANCE
              </a>
            </li>
            <li class="before-last">
              <a href="https://bcb.bi/" class="bcb" target="_blank">
                BCB
              </a>
            </li>
            <li class="last">
              <a
                href="https://www.bankofafrica.ma/"
                class="bank-site"
                target="_blank"
              >
                BANK OF AFRICA MAROC
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TopHeader;