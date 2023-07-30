import styled from '@emotion/styled';

export const Feedback = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const FeedbackButton = styled.button`
  width: 80px;
  padding: 8px 8px;
  text-transform: capitalize;
  font-weight: 700;
  border-radius: 4px;
  border-color: transparent;

  &:hover {
    box-shadow: 1px 1px 8px 1px #000000;
  }
`;
