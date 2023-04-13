import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
 :root{
    /* Colors */
    
    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;
    --brand4: #EDEAFD;
    
    --grey0:  #0B0D0D;
    --grey1:  #212529;
    --grey2:  #495057;
    --grey3:  #868E96;
    --grey4:  #ADB5BD;
    --grey5:  #CED4DA;
    --grey6:  #DEE2E6;
    --grey7:  #E9ECEF;
    --grey8:  #F1F3F5;
    --grey9:  #F8F9FA;
    --grey10: #FDFDFD;

    --whiteFixed:#FFFFFF;

    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;

    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;

    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10:#6100FF;
    --random11:#5700E3;
    --random12:#30007D;

    /* Typography */
    
    --Heading-1-700: 700 44px 'Lexend';
    --Heading-2-600: 600 36px 'Lexend';
    --Heading-3-600: 600 32px 'Lexend';
    --Heading-3-500: 500 32px 'Lexend';
    --Heading-4-600: 600 28px 'Lexend';
    --Heading-4-500: 500 28px 'Lexend';
    --Heading-5-600: 600 24px 'Lexend';
    --Heading-5-500: 500 24px 'Lexend';
    --Heading-6-600: 600 20px 'Lexend';
    --Heading-6-500: 500 20px 'Lexend';
    --Heading-7-600: 600 16px 'Lexend';
    --Heading-7-500: 500 16px 'Lexend';

    --body-1-400: 400 16px 'Inter';
    --body-1-600: 600 16px 'Inter';
    --body-2-400: 400 14px 'Inter';
    --body-2-500: 500 14px 'Inter';
    --button-big-text: 400 14px 'Inter';
    --button-medium-text: 600 14px 'Inter';
    --input-placeholder: 400 16px 'Inter';
}

 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
    font-family: 'Inter', sans-serif;
    list-style: none;
  }
  
  body,html{
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(var(--grey-4),1);
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
 
  img{
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }
`;
