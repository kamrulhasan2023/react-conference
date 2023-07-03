export function generatePortableTextAnchor(arg: string) {
  let result = arg.toLowerCase().replace(/\s+/g, '-');
  let encodedUrl = encodeURIComponent(result);
  return encodedUrl;
}
