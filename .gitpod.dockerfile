FROM gitpod/workspace-full
RUN sudo apt-get install \
&& sudo apt-get install -y redis-server \
&& sudo rm -rf /var/lib/apt/lists/*