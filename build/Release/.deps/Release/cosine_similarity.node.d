cmd_Release/cosine_similarity.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=10.7 -arch x86_64 -L./Release -stdlib=libc++  -o Release/cosine_similarity.node Release/obj.target/cosine_similarity/src/bindings/vectors/cosine_similarity.o Release/nothing.a 
