import { useState } from 'react';
import InfoBox from './InfoBox';

const Faq = () => {
  const [visibleInfoBox, setVisibleInfoBox] = useState('');

  function updateInfoBoxState(keyword) {
    if (visibleInfoBox === keyword) {
      setVisibleInfoBox('');
    } else {
      setVisibleInfoBox(keyword);
    }
  }

  return (
    <div className='my-16'>
      <InfoBox
        title='About Us'
        description='Know more about us.'
        isVisible={visibleInfoBox === 'about'}
        setIsVisible={() => updateInfoBoxState('about')}
      />
      <InfoBox
        title='Contact Us'
        description='You can also contact us.'
        isVisible={visibleInfoBox === 'contact'}
        setIsVisible={() => updateInfoBoxState('contact')}
      />
      <InfoBox
        title='Careers'
        description='Why not come work for us. It will be fun!'
        isVisible={visibleInfoBox === 'career'}
        setIsVisible={() => updateInfoBoxState('career')}
      />
    </div>
  );
};

export default Faq;
