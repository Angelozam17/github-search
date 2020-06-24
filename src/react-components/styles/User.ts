import styled from 'styled-components';

export const UserStyled = styled.div`
   width: 100%;
   height: 100vh;
   max-height: 750px;
   max-width: 425px;
   margin: 0 auto;
   border: 1px solid lightgray;

   .header {
      width : 100%;
      height: 200px;
      margin : 0;
      position: relative;

      & span {
         width : 100%;
         height: 100%;
         position: absolute;
         top   : 0;
         bottom: 0;
         left  : 0;
         right : 0;
         z-index: -1;
         background-color: var(--color-primary);
         background-image: radial-gradient(white 15%, transparent 16%),
         radial-gradient(white 15%, transparent 16%);
         background-size: 60px 60px;
         background-position: 0 0, 30px 30px;
      }
   }

   .body {
      width: 100%;
      position: relative;
      padding: 0 1rem;

      & figure {
         margin: 0 auto;
         width : 200px;
         height: 200px;
         position: relative;
         top : 0;
         left: 50%;
         margin-top: -100px;
         margin-left: -100px;

         & img {
            width : 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.2);
            object-fit: cover;
            background-color: #eee;
            padding: .5rem;
         }
      }
   }

   .title {
      text-align: center;

      & .name {
         color: var(--color-primary);
         font-size: 2rem;
         text-transform: uppercase;
         margin-bottom: .7rem;
      }

      & .profession {
         color: var(--color-green);
         font-size: .9rem;
         margin: .7rem;
      }

      & a {
         color: var(--color-green);
         font-weight: lighter;
         opacity: .7;
      }
   }

   .details {
      display: flex;
      justify-content: space-around;
      margin: 1rem 0;

      & p {
         display: flex;
         flex-direction: column;
         align-items: center;
         font-weight: bold;

         & span:first-of-type {
            color: var(--color-primary);
            font-size: 2rem;
         }

         & span:last-of-type {
            color: var(--color-green);
            font-size: .9rem;
         }
      }
   }

   .social {
      display: flex;
      justify-content: space-around;

      svg {
         margin: 2rem 0;
      }
   }
`