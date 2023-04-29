import styled from 'styled-components';
import { Form } from 'formik';

export const FormComponent = styled(Form)`
  /* min-height: 376px; */
  border-radius: 8px;
  min-width: 280px;
  width: 100%;
  padding: 40px 24px;
  
  background: var(--primary-bgc-color);
  color: var(--primary-text-color);
  
  font-weight: 600;
  font-size: 14px;
  line-height: 1.214;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 32px;
  
  color: var(--accent-text-color);
  
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 24px;
  }
`;
