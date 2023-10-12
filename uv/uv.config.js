self.__uv$config = {
    prefix: '/uvstatic/_/',
    bare: 'https://cognetwork-dev.github.io/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uvstatic/uv/uv.handler.js',
    bundle: '/uvstatic/uv/uv.bundle.js',
    config: '/uvstatic/uv/uv.config.js',
    sw: '/uvstatic/uv/uv.sw.js',
};
