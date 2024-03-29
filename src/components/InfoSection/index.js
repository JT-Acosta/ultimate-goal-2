import React, { useState } from 'react';
import { Button, ContactBtn } from '../ButtonElements';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    PreviewImg,
    Video
} from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, videoSrc, previewImg }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
      setIsPlaying(!isPlaying);
  };
  console.log('ID:', id);
  return (
      <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                          <TextWrapper>
                              <TopLine>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle darkText={darkText}>{description}</Subtitle>
                              <BtnWrap>
                              {id === 'contact' ? (
                                      <ContactBtn
                                          to='/Contact'
                                          primary={primary ? 1 : 0}
                                          dark={dark ? 1 : 0}
                                          dark2={dark2 ? 1 : 0}
                                      >
                                          {buttonLabel}
                                      </ContactBtn>
                                  ) : (
                                      <Button
                                          to='packages'
                                          smooth={true}
                                          duration={500}
                                          spy={true}
                                          exact='true'
                                          offset={-80}
                                          primary={primary ? 1 : 0}
                                          dark={dark ? 1 : 0}
                                          dark2={dark2 ? 1 : 0}
                                      >
                                          {buttonLabel}
                                      </Button>
                                  )}
                              </BtnWrap>
                          </TextWrapper>
                      </Column1>
                      <Column2>
                      <ImgWrap onClick={handleVideoClick}>
                                {videoSrc && !isPlaying && (
                                    <PreviewImg src={previewImg} alt={alt} />
                                )}
                                {videoSrc && isPlaying && (
                                    <Video autoPlay loop controls style={{ width: '100%', height: 'auto' }} volume={ 0.25 } onClick={ handleVideoClick }>
                                        <source src={videoSrc} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </Video>
                                )}
                                {!videoSrc && <Img src={img} alt={alt} />}
                            </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>
      </>
  );
};

export default InfoSection
