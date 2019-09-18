## egg-blog-be

### egg框架blog服务API

1. URL地址前缀 ` /api `

2. 请求成功 ` { code: 0, data: {} } `

3. 请求失败 ` { code: 1, error: error } `

- 注册
    - URL: /users/signup

    - METHOD: POST

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        username | 手机号 | √
        password | 密码 | √
        email | 邮箱 | √

- 登录

    - URL: /users/signin

    - METHOD: POST

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        username | 手机号 | √
        password | 密码 | √

- 退出

    - URL: /users/signout

    - METHOD: GET

- 获取分类

    - URL: /categories

    - METHOD: GET

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        pageNum | 当前页码 | 口
        pageSize | 一页显示多少条 | 口
        keyword | 搜索关键字 | 口

- 添加分类

    - URL: /categories

    - METHOD: POST

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        name | 分类名 | √

- 更新分类

    - URL: /categories/:id

    - METHOD: PUT

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        :id | 分类的id | √
        name | 分类名 | √

- 删除分类

    - URL: /categories/:id

    - METHOD: DELETE

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        :id | 分类的id | √
        ids | 分类的id数组 | 口

- 获取文章

    - URL: /articles

    - METHOD: GET

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        pageNum | 当前页码 | 口
        pageSize | 一页显示多少条 | 口
        keyword | 搜索关键字 | 口

- 添加文章

    - URL: /articles

    - METHOD: POST

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        category | 分类id | √
        title | 标题 | √
        content | 内容 | √

- 更新文章

    - URL: /articles/:id

    - METHOD: PUT

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        :id | 文章id | √
        category | 分类id | √
        title | 标题 | √
        content | 内容 | √

- 删除文章

    - URL: /articles/:id

    - METHOD: DELETE

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        :id | 文章的id | √
        ids | 文章的id数组 | 口

- 增加文章PV

    - URL: /articles/pv/:id

    - METHOD: GET

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        :id | 文章id | √

- 添加文章评论

    - URL: /articles/comment/:id

    - METHOD: POST

    - PARAMS:
        
        参数 | 说明 | required
        - | - | -
        :id | 文章id | √
        content | 内容 | √

