import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

function ImageLoader({ source, loadingSource, errorSource, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    console.log('Loaded image: ', source);
    setIsLoading(false);
  };

  const handleError = () => {
    console.log('Error loading image: ', source)
    setError(true);
    setIsLoading(false);
  };

  const isSvg = (imgSrc) => {
    return imgSrc && imgSrc.uri && imgSrc.uri.endsWith('.svg');
  };

  const renderImage = (imgSrc) => {
    if (isSvg(imgSrc)) {
      console.log("Loading SVG: ", imgSrc);
      return <SvgUri {...props} uri={imgSrc.uri} />;
    } else {
      console.log("Loading Image: ", imgSrc);
      return <Image {...props} source={imgSrc} />;
    }
  };

  return (
    <View>
      {isLoading && renderImage(loadingSource)}
      {!isLoading && !error && (
        <Image
          {...props}
          source={source}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {error && renderImage(errorSource)}
    </View>
    // <Image
    //   {...props}
    //   source={source}
    //   onLoad={handleLoad}
    //   onError={handleError}
    // />
  );
}

export default ImageLoader;
