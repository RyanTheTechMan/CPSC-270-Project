import React, { useState, useEffect } from 'react';
import {Image, StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';

const isSvgSource = (src) => {
  return typeof src === 'string' && src.toLowerCase().endsWith('.svg');
};

const ImageLoader = ({ source, loadingSource, errorSource, style, ...props }) => {
  const [currentSource, setCurrentSource] = useState(loadingSource);

  useEffect(() => {
    if (source) {
      const uri = isSvgSource(source) ? source : typeof source === 'number' ? Image.resolveAssetSource(source).uri : source;
      Image.prefetch(uri)
        .then(() => setCurrentSource(source))
        .catch(() => setCurrentSource(errorSource));
    }
  }, [source, errorSource]);

  const renderImage = () => {
    if (typeof currentSource === 'string') {
      if (isSvgSource(currentSource)) {
        return <SvgUri uri={currentSource} style={[styles.image, style]} {...props} />;
      } else {
        return <Image source={{ uri: currentSource }} style={[styles.image, style]} {...props} />;
      }
    } else if (React.isValidElement(currentSource)) {
      return React.cloneElement(currentSource, {
        ...props,
        style: [styles.image, style],
      });
    } else {
      return <Image source={currentSource} style={[styles.image, style]} {...props} />;
    }
  };

  return renderImage();
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default ImageLoader;
