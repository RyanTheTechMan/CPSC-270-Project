import React, {useState, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {SvgUri, SvgXml} from 'react-native-svg';

const isSvgSource = (src) => {
  if (typeof src === 'string') {
    return src.toLowerCase().endsWith('.svg');
  }

  if (typeof src === 'number') {
    const asset = Image.resolveAssetSource(src);
    return asset && asset.uri && asset.uri.toLowerCase().endsWith('.svg');
  }

  return false;
};

const ImageLoader = ({source, loadingSource, errorSource, style, ...props}) => {
  const [currentSource, setCurrentSource] = useState(loadingSource);
  const [remoteSvg, setRemoteSvg] = useState(null);

  useEffect(() => {
    const fetchRemoteSvg = async (uri) => {
      try {
        const response = await fetch(uri);
        const svgContent = await response.text();
        setRemoteSvg(svgContent);
      } catch (error) {
        console.error('Error fetching remote SVG:', error);
        setRemoteSvg(null);
      }
    };

    if (isSvgSource(source) && typeof source === 'string') {
      fetchRemoteSvg(source);
    } else {
      setRemoteSvg(null);
    }
  }, [source]);

  useEffect(() => {
    if (source) {
      const uri = isSvgSource(source) ? source : typeof source === 'number' ? Image.resolveAssetSource(source).uri : source;
      Image.prefetch(uri)
        .then(() => setCurrentSource(source))
        .catch(() => setCurrentSource(errorSource));
    }
  }, [source, errorSource]);

  const ImageComponent = isSvgSource(currentSource) ? SvgXml : Image;

  return isSvgSource(currentSource) && remoteSvg === null ? (
    <SvgUri uri={loadingSource} style={[styles.image, style]} {...props} />
  ) : remoteSvg !== null ? (
    <SvgXml xml={remoteSvg} style={[styles.image, style]} {...props} />
  ) : (
    <ImageComponent
      source={typeof currentSource === 'string' ? {uri: currentSource} : currentSource}
      style={[styles.image, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default ImageLoader;
