import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";


const PersonaltacR = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />

          <div className="personalTax-page">
            <div className="pp-inner-area" style={{ background: "white", margin: "2% 7% 0% 3%", borderRadius: "10px", padding: "20px 40px" }}>
              <div className="ppia-top">
                <p style={{fontSize:"20px", fontWeight:"bold"}}>Oops! You can’t use this feature</p>
              </div>

              <div className="ppia-main" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="ppia-left">
                  <div className="til" style={{ display: "flex", alignItem: "center" }}>
                    <div className="til-img">
                      <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.1279 34.9748C60.365 20.1119 50.0729 6.25813 35.1399 4.03155C20.2068 1.80497 6.28768 12.0487 4.0506 26.9116C1.81351 41.7745 12.1056 55.6282 27.0387 57.8548C41.9717 60.0814 55.8908 49.8377 58.1279 34.9748Z" fill="#E9F1FE" />
                        <g clip-path="url(#clip0_1093_130)">
                          <path d="M31.0104 30.0725C30.6422 30.0725 30.3438 30.371 30.3438 30.7392C30.3437 31.0054 30.5002 31.2345 30.7257 31.3414V32.1518C30.7257 32.309 30.8532 32.4365 31.0104 32.4365C31.1676 32.4365 31.295 32.309 31.295 32.1518V31.3414C31.5207 31.2345 31.6771 31.0054 31.6771 30.7392C31.6771 30.371 31.3786 30.0725 31.0104 30.0725Z" fill="#635EFF" />
                          <path d="M38.1156 25.3418C36.8902 24.8569 35.9177 23.9639 35.377 22.8272C35.23 22.5181 34.9121 22.3184 34.5673 22.3184H27.4344C27.0895 22.3184 26.7717 22.5181 26.6247 22.8272C26.0841 23.9639 25.1114 24.8569 23.8861 25.3418C23.5424 25.4778 23.3203 25.8054 23.3203 26.1765V27.9113C23.3203 30.1855 23.9835 32.432 25.2381 34.4081C26.505 36.4036 28.3407 38.0712 30.5466 39.2306L30.5826 39.2495C30.7136 39.3184 30.8572 39.3528 31.0009 39.3528C31.1445 39.3528 31.2881 39.3184 31.419 39.2496L31.4551 39.2306C33.6611 38.0711 35.4968 36.4036 36.7636 34.4081C38.0182 32.432 38.6814 30.1855 38.6814 27.9113V26.1765C38.6814 25.8054 38.4593 25.4778 38.1156 25.3418ZM38.1121 27.9114C38.1121 30.0773 37.4797 32.2183 36.283 34.103C35.0694 36.0146 33.3083 37.6135 31.1903 38.7268L31.1543 38.7457C31.0582 38.7962 30.9435 38.7962 30.8474 38.7457L30.8115 38.7268C28.6934 37.6135 26.9323 36.0146 25.7186 34.103C24.522 32.2183 23.8895 30.0773 23.8895 27.9113V26.1765C23.8895 26.0405 23.9704 25.9206 24.0955 25.8711C25.4553 25.3331 26.536 24.3389 27.1387 23.0718C27.1919 22.9599 27.3079 22.8877 27.4343 22.8877H34.5673C34.6937 22.8877 34.8097 22.9599 34.8629 23.0718C35.4657 24.3389 36.5464 25.3331 37.9062 25.8712C38.0313 25.9207 38.1121 26.0405 38.1121 26.1765V27.9114Z" fill="#635EFF" />
                          <path d="M39.5435 30.6125C39.3902 30.5778 39.2378 30.674 39.2032 30.8274C38.3363 34.6624 35.6962 37.9883 31.9596 39.9523L31.0913 40.4087C31.0352 40.4381 30.9683 40.4381 30.9122 40.4087L30.0439 39.9523C26.3015 37.9853 23.66 34.6536 22.7967 30.8117C22.7623 30.6583 22.61 30.5619 22.4567 30.5963C22.3033 30.6308 22.2069 30.7831 22.2414 30.9364C23.1412 34.9415 25.8886 38.4113 29.7791 40.4562L30.6474 40.9126C30.7583 40.9708 30.88 41 31.0017 41C31.1234 41 31.2452 40.9708 31.3561 40.9125L32.2244 40.4561C36.1088 38.4145 38.8548 34.9507 39.7585 30.9529C39.7931 30.7996 39.6969 30.6472 39.5435 30.6125Z" fill="#635EFF" />
                          <path d="M39.4039 24.2569C37.8841 24.0966 36.689 23.0297 36.4977 21.6626C36.4448 21.2848 36.1202 21 35.7425 21H26.2588C25.8812 21 25.5565 21.2848 25.5037 21.6626C25.3123 23.0298 24.1173 24.0966 22.5974 24.2569C22.2123 24.2975 21.9219 24.6229 21.9219 25.0137V28.0701C21.9219 28.5142 21.9449 28.9632 21.9903 29.4047C22.0054 29.5512 22.1289 29.6603 22.2731 29.6603C22.2828 29.6603 22.2927 29.6598 22.3025 29.6588C22.4589 29.6427 22.5727 29.5029 22.5566 29.3465C22.5132 28.9243 22.4911 28.4948 22.4911 28.0701V25.0137C22.4911 24.9166 22.5641 24.8328 22.6571 24.823C24.4375 24.6352 25.8398 23.368 26.0675 21.7415C26.0814 21.6417 26.1619 21.5693 26.2588 21.5693H35.7425C35.8394 21.5693 35.9199 21.6417 35.9339 21.7415C36.1614 23.368 37.5638 24.6352 39.3441 24.823C39.4372 24.8328 39.5102 24.9166 39.5102 25.0137V28.0701C39.5102 28.4904 39.4886 28.9154 39.4461 29.3334C39.4302 29.4897 39.5441 29.6294 39.7005 29.6453C39.8568 29.6613 39.9965 29.5473 40.0125 29.3909C40.0569 28.9539 40.0794 28.5095 40.0794 28.0701V25.0137C40.0795 24.6229 39.7891 24.2975 39.4039 24.2569Z" fill="#635EFF" />
                          <path d="M34.2591 28.1042H33.7911V26.7455C33.7911 25.212 32.5435 23.9644 31.0099 23.9644C29.4763 23.9644 28.2287 25.212 28.2287 26.7455V28.1042H27.7607C27.2616 28.1042 26.8555 28.5103 26.8555 29.0094V33.0848C26.8555 33.5839 27.2616 33.99 27.7607 33.99H34.2591C34.7582 33.99 35.1643 33.5839 35.1643 33.0848V29.0094C35.1643 28.5103 34.7582 28.1042 34.2591 28.1042ZM28.798 26.7456C28.798 25.5259 29.7902 24.5337 31.0099 24.5337C32.2296 24.5337 33.2219 25.5259 33.2219 26.7456V28.1042H28.798V26.7456ZM34.5951 33.0848C34.5951 33.27 34.4443 33.4208 34.2591 33.4208H27.7607C27.5754 33.4208 27.4247 33.27 27.4247 33.0848V29.0094C27.4247 28.8242 27.5755 28.6735 27.7607 28.6735H34.2591C34.4443 28.6735 34.5951 28.8242 34.5951 29.0094V33.0848Z" fill="#635EFF" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1093_130">
                            <rect width="20" height="20" fill="white" transform="translate(21 21)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="til-des" style={{ lineHeight: "1", marginLeft: "25px" }}>
                      <p style={{ fontWeight: "bold" }}>£33/year + VAT</p>
                      <p>To access, you can upgrade your account today or book a demo to find out more.</p>

                    </div>

                  </div>

                  <div className="button-ppia" style={{margin:"20px auto"}}>
                    <button style={{background:"#635EFF", color:"white", border:"none", padding:"15px 40px", borderRadius:"6px", cursor:"pointer", marginRight:"10px"}}>Upgrade to Pro</button>
                    <button style={{background:"#635EFF", color:"white", border:"none", padding:"15px 40px", borderRadius:"6px", cursor:"pointer"}}>Book a demo</button>
                  </div>

                  <div className="bottom-ppia-para">
                    <p>Look After My Taxes is FCA-regulated and won't share your<br/>
                      Personal data. <span style={{color:"#635EFF", fontWeight:"600"}}>See our terms.</span></p>
                  </div>
                </div>
                <div className="ppia-right">
                  <svg width="327" height="244" viewBox="0 0 327 244" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1117_271)">
                      <path d="M326.772 214.003H0V214.167H326.772V214.003Z" fill="#EBEBEB" />
                      <path d="M294.028 224.519H272.383V224.682H294.028V224.519Z" fill="#EBEBEB" />
                      <path d="M216.468 226.296H210.789V226.46H216.468V226.296Z" fill="#EBEBEB" />
                      <path d="M271.729 218.454H259.188V218.617H271.729V218.454Z" fill="#EBEBEB" />
                      <path d="M62.5117 219.552H34.2852V219.715H62.5117V219.552Z" fill="#EBEBEB" />
                      <path d="M72.4729 219.552H68.3359V219.715H72.4729V219.552Z" fill="#EBEBEB" />
                      <path d="M147.146 222.31H85.9219V222.473H147.146V222.31Z" fill="#EBEBEB" />
                      <path d="M154.896 184.855H28.6966C26.6379 184.855 24.9648 183.182 24.9648 181.123V3.73174C24.9648 1.67307 26.6379 0 28.6966 0H154.896C156.955 0 158.628 1.67307 158.628 3.73174V181.123C158.628 183.182 156.955 184.855 154.896 184.855ZM28.6966 0.163386C26.7294 0.163386 25.1282 1.76457 25.1282 3.73174V181.123C25.1282 183.09 26.7294 184.692 28.6966 184.692H154.896C156.863 184.692 158.464 183.09 158.464 181.123V3.73174C158.464 1.76457 156.863 0.163386 154.896 0.163386H28.6966Z" fill="#EBEBEB" />
                      <path d="M296.259 184.855H170.06C168.001 184.855 166.328 183.182 166.328 181.123V3.73174C166.328 1.67307 168.001 0 170.06 0H296.259C298.318 0 299.991 1.67307 299.991 3.73174V181.123C299.991 183.182 298.318 184.855 296.259 184.855ZM170.06 0.163386C168.093 0.163386 166.492 1.76457 166.492 3.73174V181.123C166.492 183.09 168.093 184.692 170.06 184.692H296.259C298.226 184.692 299.828 183.09 299.828 181.123V3.73174C299.828 1.76457 298.226 0.163386 296.259 0.163386H170.06Z" fill="#EBEBEB" />
                      <path d="M290.508 213.997V57.2505H238.897V213.997H290.508Z" fill="#F0F0F0" />
                      <path d="M287.684 107.776V61.8318H241.739V107.776H287.684Z" fill="#F5F5F5" />
                      <path d="M287.68 157.851V111.906H241.736V157.851H287.68Z" fill="#F5F5F5" />
                      <path d="M287.68 207.919V161.974H241.736V207.919H287.68Z" fill="#F5F5F5" />
                      <path d="M254.539 61.2241H274.877C274.877 63.8579 272.747 65.9885 270.113 65.9885H259.303C256.67 65.9885 254.539 63.8579 254.539 61.2241Z" fill="#E6E6E6" />
                      <path d="M254.539 111.292H274.877C274.877 113.926 272.747 116.056 270.113 116.056H259.303C256.67 116.056 254.539 113.926 254.539 111.292Z" fill="#E6E6E6" />
                      <path d="M254.539 161.367H274.877C274.877 164 272.747 166.131 270.113 166.131H259.303C256.67 166.131 254.539 164 254.539 161.367Z" fill="#E6E6E6" />
                      <path d="M238.906 213.997V57.2505H213.13V213.997H238.906Z" fill="#F5F5F5" />
                      <path d="M49.4883 112.397V113.815H50.3967L51.1417 124.932H62.1867L62.9317 113.815H63.8401V112.397H49.4883Z" fill="#E6E6E6" />
                      <path d="M53.1216 84.7975C54.03 78.1771 62.964 76.2818 74.3095 76.04C85.0995 75.8113 88.5568 71.988 88.5568 71.988C88.5568 71.988 88.5241 87.4509 72.9698 93.0518C58.1996 98.3716 52.2066 91.431 53.1216 84.7975Z" fill="#E6E6E6" />
                      <path d="M58.631 99.8159C58.4415 97.0906 54.0954 92.0845 43.6322 94.3588C36.0707 96.0057 33.2539 92.0845 33.2539 92.0845C33.2539 92.0845 33.9532 103.149 45.3314 106.482C56.1345 109.639 58.9643 104.606 58.631 99.8159Z" fill="#E6E6E6" />
                      <path d="M56.2457 116.566C56.128 116.566 56.0169 116.521 55.9385 116.423C55.1804 115.527 55.8013 113.377 56.6574 110.41C57.7619 106.6 59.1278 101.855 57.971 98.4043C57.3175 96.4568 56.5071 94.7445 55.7228 93.0845C54.0824 89.6142 52.6643 86.6144 53.8472 83.4774C53.9256 83.2682 54.1609 83.1637 54.37 83.2421C54.5791 83.3205 54.6837 83.5558 54.6053 83.7649C53.5465 86.5752 54.8275 89.2939 56.4548 92.7381C57.2129 94.3393 58.0691 96.1561 58.7422 98.1429C59.9839 101.829 58.5723 106.704 57.4417 110.626C56.775 112.939 56.0823 115.325 56.5594 115.893C56.7032 116.063 56.6836 116.318 56.5136 116.462C56.4352 116.527 56.3437 116.56 56.2522 116.56L56.2457 116.566Z" fill="#E6E6E6" />
                      <path d="M227.751 124.932H181.957V214.003H227.751V124.932Z" fill="#F5F5F5" />
                      <path d="M227.75 124.932H223.973V214.003H227.75V124.932Z" fill="#F0F0F0" />
                      <path d="M80.0481 165.157H185.484V127.468L80.0481 127.468V165.157Z" fill="#E6E6E6" />
                      <path d="M124.019 213.984H78.8137C78.4543 213.984 78.1602 213.69 78.1602 213.33C78.1602 212.971 78.4543 212.677 78.8137 212.677H124.019C130.555 212.677 131.424 210.775 131.424 203.2V107.783C131.424 107.423 131.718 107.129 132.078 107.129C132.437 107.129 132.731 107.423 132.731 107.783V203.2C132.731 211.291 131.47 213.984 124.019 213.984Z" fill="#E6E6E6" />
                      <path d="M85.1335 131.611L227.75 131.611V124.932L85.1335 124.932V131.611Z" fill="#F0F0F0" />
                      <path d="M85.1337 124.932H39.3398V214.003H85.1337V124.932Z" fill="#F5F5F5" />
                      <path d="M85.1329 124.932H81.3555V214.003H85.1329V124.932Z" fill="#F0F0F0" />
                      <path d="M136.672 124.932H126.797L129.195 105.704H139.077L136.672 124.932Z" fill="#F0F0F0" />
                      <path d="M138.862 124.932H128.98L131.386 105.704H141.261L138.862 124.932Z" fill="#F5F5F5" />
                      <path d="M140.059 115.318H130.184L131.386 105.704H141.261L140.059 115.318Z" fill="#F0F0F0" />
                      <path d="M103.76 113.017H173.643C174.225 113.017 174.676 112.508 174.604 111.926L169.219 68.8379C169.16 68.3543 168.748 67.9883 168.258 67.9883H98.3745C97.7929 67.9883 97.3419 68.498 97.4138 69.0797L102.799 112.168C102.858 112.652 103.27 113.017 103.76 113.017Z" fill="#F0F0F0" />
                      <path d="M104.799 113.017H174.682C175.264 113.017 175.715 112.508 175.643 111.926L170.258 68.8379C170.199 68.3543 169.787 67.9883 169.297 67.9883H99.4136C98.8319 67.9883 98.381 68.498 98.4529 69.0797L103.838 112.168C103.897 112.652 104.309 113.017 104.799 113.017Z" fill="#F5F5F5" />
                      <path d="M173.39 110.632L168.351 70.3019C168.331 70.1647 168.22 70.0667 168.083 70.0667H100.977C100.814 70.0667 100.689 70.2104 100.709 70.3738L105.748 110.704C105.768 110.841 105.879 110.939 106.016 110.939H173.122C173.285 110.939 173.409 110.796 173.39 110.632Z" fill="#E6E6E6" />
                      <path d="M166.225 110.939L148.488 70.0667H132.934L150.677 110.939H166.225Z" fill="#EBEBEB" />
                      <path d="M147.677 110.939L129.939 70.0667H124.332L142.076 110.939H147.677Z" fill="#EBEBEB" />
                      <path d="M147.848 124.932H131.757V124.729C131.757 123.847 132.476 123.128 133.359 123.128H146.246C147.129 123.128 147.848 123.847 147.848 124.729V124.932Z" fill="#F5F5F5" />
                      <path d="M133.621 124.932H122.707V124.729C122.707 123.847 123.426 123.128 124.308 123.128H132.02C132.902 123.128 133.621 123.847 133.621 124.729V124.932Z" fill="#F0F0F0" />
                      <path d="M165.629 124.932H115.881L114.535 120.938H159.159L165.629 124.932Z" fill="#F5F5F5" />
                      <path d="M121.353 124.932H113.138L112.027 120.938H120.242L121.353 124.932Z" fill="#F0F0F0" />
                      <path d="M178.219 121.592H185.702C187.545 121.592 189.041 123.089 189.041 124.932H174.879C174.879 123.089 176.376 121.592 178.219 121.592Z" fill="#F0F0F0" />
                      <path d="M129.451 18.7437H56.3125V55.4402H129.451V18.7437Z" fill="#E6E6E6" />
                      <path d="M133.073 18.7437H57.2422V55.4402H133.073V18.7437Z" fill="#F0F0F0" />
                      <path d="M130.184 52.5516V21.6389L60.1367 21.6389V52.5516H130.184Z" fill="white" />
                      <path d="M62.9062 37.0953C62.9062 36.4417 63.4356 35.9124 64.0892 35.9124H126.222C126.875 35.9124 127.405 36.4417 127.405 37.0953C127.405 37.7488 126.875 38.2782 126.222 38.2782H64.0892C63.4356 38.2782 62.9062 37.7488 62.9062 37.0953Z" fill="#F5F5F5" />
                      <path d="M163.388 243.517C233.371 243.517 290.103 240.205 290.103 236.119C290.103 232.033 233.371 228.721 163.388 228.721C93.4044 228.721 36.6719 232.033 36.6719 236.119C36.6719 240.205 93.4044 243.517 163.388 243.517Z" fill="#F5F5F5" />
                      <path d="M61.2429 127.474L215.068 127.474C219.399 127.474 222.91 123.963 222.91 119.631V23.2728C222.91 18.9414 219.399 15.4302 215.068 15.4302L61.2429 15.4302C56.9115 15.4302 53.4003 18.9414 53.4003 23.2728V119.631C53.4003 123.963 56.9115 127.474 61.2429 127.474Z" fill="#263238" />
                      <path d="M97.8832 229.976L135.05 192.809L135.965 191.9V81.7387C135.965 80.9283 136.632 80.2617 137.442 80.2617H138.887C139.697 80.2617 140.364 80.9283 140.364 81.7387V191.894L141.272 192.802L178.439 229.969C178.936 230.459 178.936 231.263 178.439 231.76L177.119 233.08C176.629 233.57 175.825 233.57 175.335 233.08L140.364 198.109V231.969C140.364 232.779 139.697 233.446 138.887 233.446H137.442C136.632 233.446 135.965 232.779 135.965 231.969V198.109L100.994 233.08C100.504 233.57 99.7001 233.57 99.2034 233.08L97.8832 231.76C97.3931 231.263 97.3931 230.459 97.8832 229.969V229.976Z" fill="#263238" />
                      <path d="M203.636 13.1362H198.676V13.7898H203.636V13.1362Z" fill="#407BFF" />
                      <path d="M194.103 13.1362H183.758V13.7898H194.103V13.1362Z" fill="#407BFF" />
                      <path d="M62.8444 127.474L216.669 127.474C221 127.474 224.512 123.963 224.512 119.631V23.2728C224.512 18.9414 221 15.4302 216.669 15.4302L62.8444 15.4302C58.5131 15.4302 55.0019 18.9414 55.0019 23.2728V119.631C55.0019 123.963 58.5131 127.474 62.8444 127.474Z" fill="#407BFF" />
                      <path d="M219.938 119.625V23.2663C219.938 21.4615 218.474 19.9985 216.67 19.9985L62.845 19.9985C61.0403 19.9985 59.5773 21.4615 59.5773 23.2663V119.625C59.5773 121.43 61.0403 122.893 62.845 122.893L216.67 122.893C218.474 122.893 219.938 121.43 219.938 119.625Z" fill="#FAFAFA" />
                      <path d="M133.859 193.371H142.46C143.604 193.371 144.531 192.443 144.531 191.299V185.424C144.531 184.28 143.604 183.352 142.46 183.352H133.859C132.715 183.352 131.787 184.28 131.787 185.424V191.299C131.787 192.443 132.715 193.371 133.859 193.371Z" fill="#407BFF" />
                      <path opacity="0.1" d="M119.264 106.031C135.472 106.031 148.66 92.8426 148.66 76.6347C148.66 60.4268 135.472 47.2383 119.264 47.2383C103.056 47.2383 89.8672 60.4268 89.8672 76.6347C89.8672 92.8426 103.056 106.031 119.264 106.031ZM119.264 47.8134C135.158 47.8134 148.085 60.7405 148.085 76.6347C148.085 92.5289 135.158 105.456 119.264 105.456C103.369 105.456 90.4423 92.5289 90.4423 76.6347C90.4423 60.7405 103.369 47.8134 119.264 47.8134Z" fill="black" />
                      <path d="M84.1752 32.5923H110.062C111.983 32.5923 113.539 34.1477 113.539 36.0691V83.9086C113.539 85.83 111.983 87.3855 110.062 87.3855H76.9339C75.0125 87.3855 73.457 85.83 73.457 83.9086V43.3104L84.1752 32.5923Z" fill="#407BFF" />
                      <path d="M85.6998 82.5949H107.234C108.071 82.5949 108.75 81.9087 108.75 81.0787C108.75 80.2422 108.064 79.5625 107.234 79.5625H85.6998C84.8633 79.5625 84.1836 80.2487 84.1836 81.0787C84.1836 81.9153 84.8698 82.5949 85.6998 82.5949Z" fill="white" />
                      <path d="M95.8404 40.4153H107.232C108.068 40.4153 108.748 39.729 108.748 38.899C108.748 38.0625 108.062 37.3828 107.232 37.3828H95.8404C95.0039 37.3828 94.3242 38.069 94.3242 38.899C94.3242 39.7356 95.0104 40.4153 95.8404 40.4153Z" fill="white" />
                      <path d="M88.4107 46.4409H107.233C108.069 46.4409 108.749 45.7547 108.749 44.9247C108.749 44.0881 108.063 43.4084 107.233 43.4084H88.4107C87.5742 43.4084 86.8945 44.0947 86.8945 44.9247C86.8945 45.7612 87.5807 46.4409 88.4107 46.4409Z" fill="white" />
                      <path d="M79.7623 52.4665H107.231C108.067 52.4665 108.747 51.7803 108.747 50.9503C108.747 50.1138 108.061 49.4341 107.231 49.4341H79.7623C78.9258 49.4341 78.2461 50.1203 78.2461 50.9503C78.2461 51.7868 78.9323 52.4665 79.7623 52.4665Z" fill="white" />
                      <path d="M79.7623 58.4922H95.7349C96.5715 58.4922 97.2512 57.8059 97.2512 56.9759C97.2512 56.1394 96.5649 55.4597 95.7349 55.4597H79.7623C78.9258 55.4597 78.2461 56.1459 78.2461 56.9759C78.2461 57.8125 78.9323 58.4922 79.7623 58.4922Z" fill="white" />
                      <path d="M103.055 58.4922H107.231C108.068 58.4922 108.748 57.8059 108.748 56.9759C108.748 56.1394 108.061 55.4597 107.231 55.4597H103.055C102.219 55.4597 101.539 56.1459 101.539 56.9759C101.539 57.8125 102.225 58.4922 103.055 58.4922Z" fill="white" />
                      <path d="M79.7623 64.518H107.231C108.067 64.518 108.747 63.8318 108.747 63.0018C108.747 62.1653 108.061 61.4856 107.231 61.4856H79.7623C78.9258 61.4856 78.2461 62.1718 78.2461 63.0018C78.2461 63.8384 78.9323 64.518 79.7623 64.518Z" fill="white" />
                      <path d="M90.3639 70.5437H107.232C108.068 70.5437 108.748 69.8575 108.748 69.0275C108.748 68.1909 108.062 67.5112 107.232 67.5112H90.3639C89.5273 67.5112 88.8477 68.1975 88.8477 69.0275C88.8477 69.864 89.5339 70.5437 90.3639 70.5437Z" fill="white" />
                      <path d="M79.7623 70.5437H84.2652C85.1018 70.5437 85.7815 69.8575 85.7815 69.0275C85.7815 68.1909 85.0952 67.5112 84.2652 67.5112H79.7623C78.9258 67.5112 78.2461 68.1975 78.2461 69.0275C78.2461 69.864 78.9323 70.5437 79.7623 70.5437Z" fill="white" />
                      <path d="M79.7623 76.5693H107.231C108.067 76.5693 108.747 75.8831 108.747 75.0531C108.747 74.2166 108.061 73.5369 107.231 73.5369H79.7623C78.9258 73.5369 78.2461 74.2231 78.2461 75.0531C78.2461 75.8896 78.9323 76.5693 79.7623 76.5693Z" fill="white" />
                      <path opacity="0.2" d="M84.1752 32.5923V39.8336C84.1752 41.755 82.6197 43.3104 80.6983 43.3104H73.457L84.1752 32.5923Z" fill="black" />
                      <path d="M171.01 36.9774V26.6252C149.103 26.6252 131.34 44.3951 131.34 66.2954C131.34 80.974 139.326 93.8031 151.181 100.652L156.358 91.6856C147.587 86.6337 141.692 77.1573 141.692 66.2954C141.692 50.1071 154.822 36.9709 171.017 36.9709L171.01 36.9774Z" fill="#263238" />
                      <path opacity="0.2" d="M210.682 66.2956C210.682 55.7801 206.493 45.6763 199.062 38.2455C191.631 30.8147 181.527 26.6189 171.012 26.6189V36.971C187.2 36.971 200.336 50.1008 200.336 66.2956H210.688H210.682Z" fill="black" />
                      <path d="M210.681 66.2957H200.329C200.329 82.497 187.199 95.6202 171.004 95.6202C165.665 95.6202 160.652 94.1955 156.352 91.6924L151.176 100.659C170.024 111.534 194.473 104.979 205.361 86.1307C208.831 80.1116 210.674 73.2624 210.674 66.3022L210.681 66.2957Z" fill="#407BFF" />
                      <path d="M115.191 94.7771L127.733 78.5757L140.274 94.7771H134.373V115.756H121.093V94.7771H115.191Z" fill="#407BFF" />
                      <path d="M220.895 227.943L215.941 226.231L218.595 214.291L223.555 216.01L220.895 227.943Z" fill="#FF8B7B" />
                      <path opacity="0.2" d="M218.596 214.297L217.23 220.447L222.184 222.166L223.557 216.01L218.596 214.297Z" fill="black" />
                      <path d="M268.559 230.76H263.318L259.227 218.611H264.475L268.559 230.76Z" fill="#FF8B7B" />
                      <path opacity="0.2" d="M264.475 218.617H259.227L261.338 224.878H266.585L264.475 218.617Z" fill="black" />
                      <path d="M262.62 230.152H269.018C269.234 230.152 269.417 230.303 269.462 230.512L270.502 235.172C270.606 235.655 270.227 236.113 269.73 236.106C267.672 236.073 266.169 235.949 263.581 235.949C261.986 235.949 257.176 236.113 254.973 236.113C252.771 236.113 252.483 233.936 253.385 233.74C257.424 232.858 260.476 231.636 261.77 230.473C262.005 230.263 262.306 230.152 262.62 230.152Z" fill="#263238" />
                      <path d="M216.177 225.669L221.588 227.545C221.791 227.617 221.915 227.819 221.895 228.028L221.346 232.773C221.287 233.263 220.791 233.577 220.327 233.407C218.386 232.695 215.602 231.61 213.151 230.76C210.282 229.767 207.746 229.067 204.38 227.898C202.348 227.192 202.492 224.937 203.406 225.048C207.576 225.545 210.778 226.545 214.843 225.643C215.288 225.545 215.745 225.519 216.17 225.669H216.177Z" fill="#263238" />
                      <path d="M155.039 54.8325L208.578 102.489L207.663 103.515L154.602 55.3161L155.039 54.8325Z" fill="#263238" />
                      <path d="M244.679 73.0597C244.3 74.1968 243.934 75.1837 243.515 76.2163C243.104 77.2358 242.679 78.2488 242.234 79.2553C241.339 81.2616 240.352 83.2419 239.261 85.1829C238.163 87.1239 236.967 89.0388 235.562 90.8818C234.17 92.7313 232.588 94.5286 230.575 96.1232L229.791 96.7049C229.516 96.8944 229.216 97.0774 228.935 97.2604C228.353 97.6068 227.758 97.9336 227.164 98.1885C225.968 98.7178 224.759 99.1099 223.569 99.3779C221.184 99.9399 218.851 100.084 216.576 100.071C214.302 100.031 212.08 99.8092 209.904 99.4433C208.812 99.2668 207.74 99.025 206.669 98.7766C205.59 98.5218 204.564 98.2473 203.453 97.8813L204.329 94.0384C205.277 94.1169 206.329 94.1953 207.329 94.2476C208.342 94.2999 209.355 94.3129 210.361 94.326C212.374 94.326 214.367 94.2606 216.302 94.0319C218.23 93.8293 220.099 93.4502 221.772 92.8947C222.615 92.6202 223.386 92.2673 224.079 91.8817C224.438 91.6987 224.752 91.4831 225.059 91.2674C225.203 91.1498 225.353 91.0517 225.497 90.9276L225.955 90.5354C227.164 89.4179 228.32 87.9735 229.379 86.4116C230.438 84.8365 231.418 83.1439 232.333 81.3924C233.248 79.6343 234.104 77.824 234.915 75.9875C235.32 75.0726 235.719 74.1445 236.091 73.21C236.457 72.2885 236.849 71.3147 237.163 70.4651L244.685 73.0466L244.679 73.0597Z" fill="#FF8B7B" />
                      <path d="M246.808 70.4782C247.932 75.3668 238.9 89.0977 238.9 89.0977L227.574 80.8173C227.574 80.8173 230.92 74.3145 235.221 69.4587C239.639 64.4722 245.573 65.1126 246.808 70.4782Z" fill="#263238" />
                      <path d="M204.962 94.0386L199.367 92.7708L200.178 99.4238C200.178 99.4238 203.7 100.47 205.746 97.241L204.962 94.0386Z" fill="#FF8B7B" />
                      <path d="M195.715 92.6138L197.532 97.6395L200.185 99.4237L199.368 92.7706L195.715 92.6138Z" fill="#FF8B7B" />
                      <path d="M270.279 69.7529C263.449 89.3069 263.325 110.488 262.56 114.73C258.482 114.187 243.124 112.116 234.752 110.985C232.87 80.9612 241.117 66.0865 241.117 66.0865C241.117 66.0865 242.934 65.8447 245.392 65.7401C246.163 65.7074 246.993 65.6878 247.856 65.6944C248.333 65.6944 248.816 65.7074 249.306 65.727C252.47 65.8643 257.6 66.6747 261.129 67.3217C261.867 67.4589 262.619 67.6158 263.345 67.7792C264.018 67.936 264.678 68.0994 265.299 68.2628C268.115 69.0013 270.279 69.7529 270.279 69.7529Z" fill="#263238" />
                      <path d="M265.297 68.2628L263.101 69.9228C260.31 72.0337 257.102 73.9878 252.494 73.9878C251.971 73.9878 251.435 73.9617 250.899 73.9094C247.083 73.5304 245.625 71.6743 245.07 70.1777C244.501 68.6419 244.756 67.0864 245.39 65.7401C246.161 65.7074 246.991 65.6878 247.854 65.6944C248.331 65.6944 248.815 65.7074 249.305 65.727C252.468 65.8643 257.598 66.6747 261.127 67.3217C261.866 67.4589 262.617 67.6158 263.343 67.7792C264.016 67.936 264.676 68.0994 265.297 68.2628Z" fill="#407BFF" />
                      <path d="M261.752 53.8521C260.49 57.5576 258.811 64.4264 261.131 67.3216C258.784 69.0992 255.765 71.1056 251.23 70.6547C246.694 70.2037 247.896 67.204 249.315 65.727C253.693 65.2825 254.007 62.1259 253.667 59.0673L261.758 53.8521H261.752Z" fill="#FF8B7B" />
                      <path opacity="0.2" d="M258.451 55.9827L253.66 59.0674C253.745 59.7928 253.784 60.5183 253.739 61.2176C255.392 61.2045 257.856 59.7209 258.255 58.0479C258.457 57.2113 258.529 56.3944 258.444 55.9827H258.451Z" fill="black" />
                      <path d="M252.123 38.9839C248.057 38.6506 246.652 48.4407 249.188 50.3164C251.724 52.192 259.736 39.6048 252.123 38.9839Z" fill="#263238" />
                      <path d="M262.973 48.1858C261.96 53.29 261.634 56.3355 258.673 58.6295C254.222 62.0802 248.184 58.8647 247.648 53.558C247.164 48.7805 248.896 41.2321 254.216 39.8597C259.457 38.5068 263.98 43.0816 262.973 48.1858Z" fill="#FF8B7B" />
                      <path d="M261.933 53.1854C259.417 54.7539 256.992 40.8073 263.978 41.1341C272.54 41.5393 267.285 49.8589 261.933 53.1854Z" fill="#263238" />
                      <path d="M264.109 43.1274C260.371 44.3365 244.562 42.7419 242.601 38.8271C243.588 38.9186 245.189 38.8271 245.921 38.4089C245.921 38.4089 242.568 37.5004 242.039 34.4353C247.96 37.4612 260.462 33.5203 264.933 36.8796C268.632 39.6506 266.998 42.1929 264.103 43.1274H264.109Z" fill="#263238" />
                      <path d="M265.921 41.8269C265.921 41.8269 265.705 40.3107 270.103 42.0491C266.47 41.389 266.038 42.487 266.038 42.487L265.914 41.8269H265.921Z" fill="#263238" />
                      <path d="M264.534 54.1788C263.645 55.2637 262.338 55.8388 261.187 55.9303C259.456 56.0741 258.92 54.4468 259.671 52.9894C260.351 51.6758 262.07 50.0157 263.671 50.5582C265.252 51.0876 265.553 52.9436 264.534 54.1854V54.1788Z" fill="#FF8B7B" />
                      <path d="M215.766 218.663L224.164 221.565C224.164 221.565 232.385 189.155 234.96 173.013C235.744 168.105 237.496 161.308 239.613 154.047C242.286 144.904 245.535 135.042 248.168 127.323C250.946 119.193 253.037 113.449 253.037 113.449L234.758 110.985C234.758 110.985 220.831 153.681 219.262 169.614C217.628 186.182 215.772 218.663 215.772 218.663H215.766Z" fill="#407BFF" />
                      <path opacity="0.2" d="M239.615 154.047C242.288 144.904 245.536 135.042 248.17 127.324L246.529 123.095C241.628 128.212 239.321 144.891 239.615 154.047Z" fill="black" />
                      <path d="M244.616 112.312C244.616 112.312 243.714 157.256 244.943 172.582C246.296 189.358 258.87 223.663 258.87 223.663H268.477C268.477 223.663 262.066 192.266 260.098 175.974C257.857 157.413 262.556 114.736 262.556 114.736L244.616 112.318V112.312Z" fill="#407BFF" />
                      <path d="M257.716 223.872H269.035V220.493L256.383 220.271L257.716 223.872Z" fill="#263238" />
                      <path d="M214.645 218.493L224.65 221.95L225.768 218.722L214.645 214.683V218.493Z" fill="#263238" />
                      <path d="M254.966 48.5714C254.907 48.9897 254.639 49.3034 254.364 49.2642C254.09 49.225 253.913 48.859 253.972 48.4407C254.031 48.0224 254.299 47.7087 254.574 47.7479C254.848 47.7872 255.024 48.1531 254.966 48.5714Z" fill="#263238" />
                      <path d="M250.227 47.9376C250.169 48.3559 249.901 48.6696 249.626 48.6304C249.352 48.5912 249.175 48.2252 249.234 47.8069C249.293 47.3886 249.561 47.0749 249.835 47.1142C250.11 47.1534 250.286 47.5194 250.227 47.9376Z" fill="#263238" />
                      <path d="M251.706 48.3494C251.706 48.3494 250.425 50.6368 249.223 51.6628C249.87 52.4536 251.177 52.3098 251.177 52.3098L251.713 48.3494H251.706Z" fill="#FF5652" />
                      <path d="M252.791 53.6692C254.412 53.6692 255.307 52.6627 255.346 52.617C255.392 52.5647 255.385 52.4863 255.333 52.4405C255.281 52.3948 255.202 52.4013 255.157 52.4536C255.144 52.4666 254.111 53.6365 252.275 53.3881C252.209 53.3816 252.144 53.4274 252.137 53.4927C252.131 53.5581 252.177 53.6234 252.242 53.63C252.431 53.6561 252.614 53.6692 252.791 53.6692Z" fill="#263238" />
                      <path d="M256.638 47.2382C256.677 47.2382 256.723 47.2251 256.762 47.2055C256.88 47.1401 256.925 46.9833 256.854 46.8657C256.18 45.6697 255.037 45.5847 254.984 45.5782C254.847 45.5716 254.73 45.6762 254.723 45.8134C254.716 45.9507 254.814 46.0683 254.952 46.0749C254.991 46.0749 255.88 46.1533 256.422 47.1075C256.468 47.1859 256.553 47.2316 256.638 47.2316V47.2382Z" fill="#263238" />
                      <path d="M248.405 46.0292C248.484 46.0292 248.562 45.99 248.615 45.9181C249.222 45.0032 250.118 44.9901 250.157 44.9901C250.294 44.9901 250.405 44.879 250.405 44.7418C250.405 44.6045 250.294 44.4934 250.157 44.4934C250.105 44.4934 248.961 44.4934 248.203 45.6436C248.124 45.7547 248.157 45.9116 248.275 45.99C248.314 46.0162 248.366 46.0292 248.412 46.0292H248.405Z" fill="#263238" />
                      <path d="M260.879 231.067C261.362 231.067 261.885 230.969 262.251 230.878C262.297 230.865 262.336 230.826 262.343 230.78C262.349 230.728 262.329 230.682 262.284 230.656C262.094 230.538 260.401 229.499 259.82 229.793C259.728 229.839 259.617 229.937 259.604 230.146C259.585 230.427 259.676 230.643 259.859 230.799C260.094 231.002 260.467 231.067 260.872 231.067H260.879ZM261.892 230.701C261.003 230.878 260.317 230.845 260.029 230.61C259.905 230.505 259.846 230.355 259.859 230.159C259.859 230.061 259.905 230.028 259.937 230.015C260.238 229.858 261.205 230.309 261.892 230.708V230.701Z" fill="#407BFF" />
                      <path d="M262.228 230.884C262.228 230.884 262.273 230.878 262.293 230.865C262.332 230.839 262.352 230.799 262.352 230.754C262.352 230.688 262.221 229.179 261.613 228.675C261.456 228.545 261.273 228.492 261.084 228.518C260.79 228.558 260.711 228.741 260.692 228.845C260.581 229.427 261.633 230.577 262.175 230.871C262.195 230.884 262.214 230.884 262.234 230.884H262.228ZM261.169 228.76C261.273 228.76 261.365 228.793 261.456 228.871C261.849 229.192 262.012 230.074 262.077 230.512C261.535 230.1 260.868 229.231 260.934 228.891C260.934 228.858 260.953 228.786 261.117 228.767C261.117 228.767 261.156 228.767 261.175 228.767L261.169 228.76Z" fill="#407BFF" />
                      <path d="M215.452 226.185C215.498 226.185 215.543 226.159 215.563 226.12C215.589 226.074 215.576 226.016 215.543 225.976C215.36 225.78 213.713 224.081 212.995 224.212C212.857 224.238 212.753 224.323 212.694 224.46C212.596 224.689 212.602 224.905 212.714 225.107C213.093 225.774 214.576 226.074 215.432 226.192C215.432 226.192 215.445 226.192 215.452 226.192V226.185ZM213.086 224.447C213.504 224.447 214.445 225.231 215.099 225.878C213.942 225.682 213.145 225.349 212.929 224.976C212.857 224.846 212.851 224.702 212.916 224.552C212.942 224.493 212.975 224.46 213.034 224.454C213.047 224.454 213.066 224.454 213.086 224.454V224.447Z" fill="#407BFF" />
                      <path d="M215.453 226.185C215.453 226.185 215.48 226.185 215.486 226.185C215.525 226.172 215.558 226.14 215.571 226.094C215.584 226.035 215.911 224.656 215.46 223.918C215.323 223.695 215.127 223.552 214.878 223.493C214.545 223.414 214.395 223.545 214.329 223.669C214.042 224.199 214.859 225.682 215.362 226.159C215.388 226.179 215.414 226.192 215.447 226.192L215.453 226.185ZM214.695 223.715C214.728 223.715 214.774 223.715 214.826 223.735C215.009 223.78 215.146 223.878 215.251 224.048C215.545 224.532 215.447 225.395 215.375 225.806C214.891 225.231 214.375 224.107 214.545 223.787C214.558 223.767 214.584 223.715 214.689 223.715H214.695Z" fill="#407BFF" />
                      <path d="M271.264 72.7527C271.774 73.6938 272.199 74.5369 272.623 75.4388C273.042 76.3276 273.447 77.2229 273.845 78.1183C274.617 79.9221 275.336 81.752 275.969 83.6277C276.623 85.4903 277.165 87.4182 277.643 89.3723L277.982 90.8493L278.257 92.359C278.355 92.8557 278.414 93.3785 278.486 93.8948L278.584 94.666L278.61 94.8621L278.642 95.1823C278.669 95.4307 278.669 95.6463 278.669 95.8686C278.61 97.5939 278.172 98.7572 277.734 99.8486C277.283 100.92 276.773 101.862 276.237 102.77C275.166 104.561 273.983 106.162 272.761 107.704C270.297 110.782 267.65 113.54 264.768 116.174L261.84 113.54C263.938 110.514 266.016 107.391 267.885 104.293C268.82 102.744 269.689 101.175 270.401 99.646C270.754 98.8879 271.068 98.1233 271.27 97.4371C271.48 96.7639 271.578 96.0842 271.525 95.9208C271.519 95.9078 271.519 95.8882 271.512 95.9012C271.512 95.8882 271.512 95.9404 271.506 95.8686L271.473 95.7117L271.342 95.0908C271.251 94.6791 271.172 94.2674 271.055 93.8426L270.728 92.5943L270.356 91.3395C269.833 89.6664 269.251 87.9868 268.597 86.3137C267.937 84.6472 267.251 82.9807 266.519 81.3272C266.16 80.4972 265.787 79.6737 265.402 78.8568L264.258 76.4714L271.284 72.7527H271.264Z" fill="#FF8B7B" />
                      <path d="M270.277 69.7529C274.963 71.5371 278.113 82.863 278.113 82.863L268.428 92.5355C268.428 92.5355 264.245 84.1505 262.552 77.8961C260.709 71.0796 264.598 67.5962 270.277 69.7595V69.7529Z" fill="#263238" />
                      <path d="M262.976 112.769L257.918 114.442L262.486 119.344C262.486 119.344 266.473 116.965 265.447 114.71L262.97 112.769H262.976Z" fill="#FF8B7B" />
                      <path d="M255.469 118.076L259.436 121.952L262.488 119.35L257.926 114.442L255.469 118.076Z" fill="#FF8B7B" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1117_271">
                        <rect width="326.772" height="243.517" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default PersonaltacR