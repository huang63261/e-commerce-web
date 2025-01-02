# Git 分支命名規範

## 1. 分支常見結構

```plaintext
<prefix>/<description>
```

- 前綴(prefix)：用於表示分支的類型或用途，例如功能開發、修復 Bug 等。
- 描述(description)：簡短描述分支內容，應使用簡潔且具辨識度的名稱。

## 2. 常見分支前綴

| 前綴    | 用途                                    | 範例                        |
|---------|-----------------------------------------|-----------------------------|
| feat | 開發新功能                              | feat/login-page          |
| fix  | 修復 Bug                                | fix/header-display       |
| hotfix  | 緊急修復（通常直接從主分支或產品分支開出來） | hotfix/login-crash          |
| release | 用於準備發佈的版本                      | release/v1.2.0              |
| chore   | 例行性工作（如更新文件、設定檔或工具升級） | chore/update-eslint         |
| test    | 用於測試或實驗性功能                    | test/new-idea               |
| docs    | 更新文件                                | docs/api-specification      |
| refactor| 重構程式碼，不改變功能                  | refactor/auth-module        |
| ci      | 與 CI/CD 流程相關的更改                 | ci/github-actions           |
| perf    | 性能優化                                | perf/query-optimization     |

## 3. 分支命名的細節建議

### 3.1 使用小寫與連字符

- 使用全小寫，並以 -（連字符） 分隔單字，便於閱讀。
  - 範例：feat/user-authentication 而非 Feat_UserAuthentication

### 3.2 包含工作項目 ID

- 如果使用了任務管理工具（如 JIRA、Trello），可以將任務 ID 加入分支名稱：
  - 範例：feat/trello-123-login-page

### 3.3 描述具體內容

- 分支名稱應清楚說明分支的目的或變更內容：
  - 不好：feature/update
  - 好：feature/update-user-profile

### 3.4 長度適中

- 避免分支名稱過長，保持簡潔。建議控制在 50 字符內。

## 4. 示例：完整分支命名流程

假設你有一個專案，並需要：

1. 開發登入功能：`feat/login-page`
2. 修復主頁 Bug：`ix/homepage-loading`
3. 準備版本發佈：`release/v1.0.0`

分支名應遵循統一格式，讓每個人一看就知道分支的用途和內容。

## 5. 適用於 Git Flow 的分支命名

如果你使用 Git Flow 工作流程，可以遵循以下規範：

1. 主分支（`main`）：用於穩定版本的代碼。
2. 開發分支（`dev`）：開發階段的主要工作分支。
3. 功能分支（`feat/*`）：從 `develop` 分支開出來。
4. 修復分支：
   - Bug 修復（`fix/*`）：從 `develop` 開出來。
   - 緊急修復（`hotfix/*`）：從 `main` 或 `release` 開出來。
5. 發佈分支（`release/*`）：準備發佈前從 `develop` 開出。
