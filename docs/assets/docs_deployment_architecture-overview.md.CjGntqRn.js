import{_ as e}from"./chunks/docker-compose.DYQejvX2.js";import{_ as l,c as n,a9 as r,o as i}from"./chunks/framework.BjXht68r.js";const d="/images/finclip-ops-arch.png",a="/images/finclip-k8s-sm.jpg",s="/images/finclip-k8s-xl.jpg",o="/images/two_center.png",_=JSON.parse('{"title":"架构说明","description":"FinClip 运维架构说明","frontmatter":{"title":"架构说明","description":"FinClip 运维架构说明"},"headers":[],"relativePath":"docs/deployment/architecture-overview.md","filePath":"docs/deployment/architecture-overview.md"}'),g={name:"docs/deployment/architecture-overview.md"};function c(p,t,h,y,x,u){return i(),n("div",null,t[0]||(t[0]=[r('<p>  FinClip 后端服务采用 Golang 语言编写，系统架构采用微服务架构，每个服务经过编译之后会被打包成容器，我 们采用业界主流的容器管理平台进行服务编排, 因此，我们大部分运维能力，包括服务的故障转移、动态扩容、资源管理等能力都是依赖于容器平台实现。此外，FinClip 还依赖部分成熟的开源组件作为基础设施，以实现业务系统中的数据存储、缓存等。</p><p><strong>运维架构图：</strong></p><p><img src="'+d+'" alt="运维架构图"></p><p><strong>架构部分：</strong></p><ul><li><p>基础服务部分：</p><ul><li>数据库：MySQL</li><li>数据缓存：Redis</li><li>对象存储：Minio (<em>或者兼容 S3 的存储服务</em>)</li></ul></li><li><p>容器： Docker</p></li><li><p>容器编排平台： Kubernetes、Rancher(可选)</p></li><li><p>日志系统：</p><ul><li>大规模： 采用 Vector + Kafka + ElasticSearch + Kibana</li><li>中小规模： Loki + Grafana</li></ul></li><li><p>监控系统： Prometheus</p></li></ul><p>  FinClip 采用典型的三层架构设计，接入层 - 服务层 - 基础服务层。因此，我们的平台架构兼顾运维可维护性、可扩展性和安全性。</p><h2 id="部署模式对比" tabindex="-1">部署模式对比 <a class="header-anchor" href="#部署模式对比" aria-label="Permalink to &quot;部署模式对比&quot;">​</a></h2><p>提供多种部署模式，以满足不同业务场景和需求。</p><table tabindex="0"><thead><tr><th>部署模式</th><th>适用环境</th><th>架构设计</th><th>优点</th><th>缺点</th><th>部署说明</th></tr></thead><tbody><tr><td>单节点</td><td>POC、测试环境</td><td>compose 部署所有服务</td><td>部署快、成本低</td><td>性能一般，单点故障</td><td>服单台务器部署所有服务</td></tr><tr><td>小集群</td><td>生产、高可用场景</td><td>使用Kubernetes ，4台服务器</td><td>高可用、资源利用高</td><td>资源竞争</td><td>服务均匀分布在4台服务器</td></tr><tr><td>中大规模集群</td><td>对扩展性、灾备有要求</td><td>Kubernetes 集群，多服务器，业务与基础服务分离</td><td>高可用、性能较好、无资源竞争</td><td>成本较高</td><td>类似小规模，更多服务器且服务分离</td></tr><tr><td>双机房冷备集群</td><td>对业务连续性要求高</td><td>主机房工作，冷备机房待命接管</td><td>更高的容灾能力、切换灵活</td><td>成本高、维护复杂</td><td>主从机房都部署 Kubernetes 集群，主机房部署数据服务集群，冷备机房做单节点同步</td></tr></tbody></table><h2 id="单节点部署模式" tabindex="-1">单节点部署模式 <a class="header-anchor" href="#单节点部署模式" aria-label="Permalink to &quot;单节点部署模式&quot;">​</a></h2><p>在单节点部署模式中，所有服务将部署在一台服务器中</p><p><strong>操作系统与容器平台：</strong></p><ul><li><strong>Linux</strong>：作为基础操作系统，提供稳定的环境和资源管理。</li><li><strong>Docker</strong>：用于容器化各个服务，确保服务间的隔离性和易于管理。</li><li><strong>Docker Compose</strong>：用于定义和管理多容器应用，简化服务的启动和停止操作。</li></ul><p><strong>容器与系统组件：</strong></p><ul><li><strong>Gateway</strong>：负责 API 网关和请求路由。</li><li><strong>前后端服务</strong>：前端和后端服务共同构成了应用的核心业务逻辑。</li><li><strong>数据层</strong>：包括 MySQL、MinIO 和 Redis，用于数据存储和缓存管理。</li></ul><p><img src="'+e+'" alt="compose"></p><p><strong>服务器：</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">用途</th><th style="text-align:center;">CPU</th><th style="text-align:center;">内存</th><th style="text-align:center;">储存空间</th><th style="text-align:center;">部署内容</th><th style="text-align:center;">数量</th><th style="text-align:left;">参考 TPS</th></tr></thead><tbody><tr><td style="text-align:center;">最低配置</td><td style="text-align:center;">4 核</td><td style="text-align:center;">8 GB</td><td style="text-align:center;">100 GB</td><td style="text-align:center;">数据库、缓存和FinClip微服务</td><td style="text-align:center;">1</td><td style="text-align:left;">4000</td></tr><tr><td style="text-align:center;">推荐配置</td><td style="text-align:center;">8 核</td><td style="text-align:center;">16 GB</td><td style="text-align:center;">200 GB</td><td style="text-align:center;">数据库、缓存和FinClip微服务</td><td style="text-align:center;">1</td><td style="text-align:left;">6000</td></tr></tbody></table><p><strong>系统：</strong></p><ul><li>芯片架构: X86</li><li>操作系统: CentOS 7.9 或 Ubuntu 22.04 、 KylinOS V10 等</li></ul><h2 id="集群部署模式" tabindex="-1">集群部署模式 <a class="header-anchor" href="#集群部署模式" aria-label="Permalink to &quot;集群部署模式&quot;">​</a></h2><h3 id="_1-小规模集群" tabindex="-1">1.小规模集群 <a class="header-anchor" href="#_1-小规模集群" aria-label="Permalink to &quot;1.小规模集群&quot;">​</a></h3><p>小规模集群的部署架构提供最小规模的高可用，需要使用四台服务器，其中四台服务器只能宕机一台，适合绝大部分的、对高可用与故障隔离具有较小要求的客户。</p><p>小规模集群将采用 Kubernetes 的方式部署，所需的配置可以参考下表▼：</p><table tabindex="0"><thead><tr><th style="text-align:center;">用途</th><th style="text-align:center;">CPU</th><th style="text-align:center;">内存</th><th style="text-align:center;">储存空间</th><th style="text-align:center;">数量</th><th style="text-align:center;">参考 TPS</th></tr></thead><tbody><tr><td style="text-align:center;">业务服务</td><td style="text-align:center;">8 核</td><td style="text-align:center;">16 GB</td><td style="text-align:center;">500 GB</td><td style="text-align:center;">4 台</td><td style="text-align:center;">2w</td></tr><tr><td style="text-align:center;">运维管理(可选)</td><td style="text-align:center;">8 核</td><td style="text-align:center;">16 GB</td><td style="text-align:center;">500 GB</td><td style="text-align:center;">1 台</td><td style="text-align:center;">-</td></tr></tbody></table><p>角色分配可以参考下图▼：</p><p><img src="'+a+'" alt=""></p><p><strong>系统:</strong></p><ul><li>芯片架构: X86</li><li>操作系统: CentOS 7.9 或 Ubuntu 22.04 、 KylinOS V10 等</li></ul><p><strong>部署说明：</strong> 所有服务将均匀部署在四台服务器中， 数据库和缓存系统使用docker compose部署在主机，业务服务使用Kubernetes进行部署，均匀分布在四台服务器。</p><h3 id="_2-中大规模集群" tabindex="-1">2.中大规模集群 <a class="header-anchor" href="#_2-中大规模集群" aria-label="Permalink to &quot;2.中大规模集群&quot;">​</a></h3><p>集群模式部署能够提供一定程度的、软件层面的故障转移能力。大规模集群的部署架构适合对可扩展性、灾备等指标有要求的客户使用。该架构的集群设计上主要关注在于故障隔离、故障恢复、可拓展性等方面。</p><p>大规模集群的服务器数量没有上限，支持多活、多机房部署，可根据业务规模、灾备要求自定义。相比小规模集群，大规模集群可以提供更高的QPS，更好的性能以及更好的扩展性。</p><p>大规模集群将采用 Kubernetes 的方式部署，所需的配置可以参考下表(磁盘建议使用SSD)▼：</p><table tabindex="0"><thead><tr><th style="text-align:center;">用途</th><th style="text-align:center;">CPU</th><th style="text-align:center;">内存</th><th style="text-align:center;">储存空间</th><th style="text-align:center;">数量</th><th style="text-align:center;">参考 TPS</th></tr></thead><tbody><tr><td style="text-align:center;">业务服务</td><td style="text-align:center;">8 核</td><td style="text-align:center;">16 GB</td><td style="text-align:center;">500 GB</td><td style="text-align:center;">8 台</td><td style="text-align:center;">3w</td></tr><tr><td style="text-align:center;">运维管理</td><td style="text-align:center;">8 核</td><td style="text-align:center;">16 GB</td><td style="text-align:center;">500 GB</td><td style="text-align:center;">1 台</td><td style="text-align:center;">-</td></tr></tbody></table><p>角色分配可以参考下图▼：</p><p><img src="'+s+'" alt=""></p><p><strong>系统:</strong></p><ul><li>芯片架构: X86</li><li>操作系统: CentOS 7.9 或 Ubuntu 22.04 、 KylinOS V10 等</li></ul><p><strong>部署说明：</strong> 与小规模部署类似，不过，大规模集群部署采用更多的服务器，业务服务与基础服务分离， 微服务采用更多的实例数部署，以承担更高的用户访问。</p><h3 id="_3-双机房冷备集群" tabindex="-1">3.双机房冷备集群 <a class="header-anchor" href="#_3-双机房冷备集群" aria-label="Permalink to &quot;3.双机房冷备集群&quot;">​</a></h3><p>双机房部署架构提供更高的容灾能力，适用于对业务连续性要求较高的客户。双机房架构通常包含一个主机房和一个冷备机房，平时仅主机房提供服务，冷备机房处于待命状态，只有在主机房出现故障时才会启用。</p><p><strong>部署架构</strong></p><ul><li><p><strong>主机房</strong>：主机房承担所有的业务负载，所有业务服务、数据库和缓存系统都运行在主机房。通常部署的组件和资源配置与小规模集群类似，保证业务的正常运转。</p></li><li><p><strong>冷备机房</strong>：冷备机房不承担日常业务，但部署有与主机房相同的服务架构和数据同步机制。通过数据库备份或实时同步的方式，确保数据的一致性。一旦主机房故障，冷备机房能够迅速接管业务。</p></li></ul><p><strong>所需的配置可以参考下表(磁盘建议使用SSD)▼:</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">用途</th><th style="text-align:center;">CPU</th><th style="text-align:center;">内存</th><th style="text-align:center;">储存空间</th><th style="text-align:center;">数量</th><th style="text-align:center;">参考 TPS</th></tr></thead><tbody><tr><td style="text-align:center;">业务服务</td><td style="text-align:center;">8 核</td><td style="text-align:center;">16 GB</td><td style="text-align:center;">500 GB</td><td style="text-align:center;">12 台</td><td style="text-align:center;">3w</td></tr><tr><td style="text-align:center;">运维管理</td><td style="text-align:center;">8 核</td><td style="text-align:center;">16 GB</td><td style="text-align:center;">500 GB</td><td style="text-align:center;">1 台</td><td style="text-align:center;">-</td></tr></tbody></table><p><strong>角色分配可以参考下图▼：</strong></p><p><img src="'+o+'" alt=""></p><p><strong>数据同步机制</strong></p><ol><li><p><strong>数据库同步</strong>：通过主从复制和数据库同步工具保证主机房和冷备机房数据库的一致性。主机房负责写入，冷备机房保持数据同步。</p></li><li><p><strong>缓存同步</strong>：Redis 等缓存服务可以通过持久化机制来同步缓存数据。冷备机房的缓存数据可以在主机房故障时恢复。</p></li><li><p><strong>文件同步</strong>：通过对象存储的同步机制确保业务文件和数据的一致性。</p></li></ol><p><strong>部署说明</strong></p><ul><li><strong>业务服务部署</strong>：主从机房所有应用服务均使用 Kubernetes 部署，分布在4台服务器上，冷备机房部署相同的架构。</li><li><strong>数据库与缓存</strong>：主机房的数据库和缓存系统使用集群部署，冷备机房部署单节点服务，保持数据同步。正常情况下，冷备机房不会处理数据写入和业务请求。</li></ul>',52)]))}const f=l(g,[["render",c]]);export{_ as __pageData,f as default};