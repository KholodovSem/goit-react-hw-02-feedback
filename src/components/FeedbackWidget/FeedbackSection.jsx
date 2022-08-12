import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: auto;
  margin-left: auto;

  width: 350px;
  padding: 15px;


`

const FeedbackSection = ({children, title}) => (
  <Section>
    {title && <h1>{title}</h1>}
    {children}
  </Section>
)

FeedbackSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default FeedbackSection;

