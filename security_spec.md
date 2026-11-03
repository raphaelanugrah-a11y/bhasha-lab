# Security Specification for BhashaLab Language Lab

## 1. Data Invariants

1. **User Role Integrity**:
   - Only users themselves can create their own profile document (`/users/{userId}`).
   - Students cannot self-elevate to `teacher` or `admin`.
   - The user email `raphaelanugrah@gmail.com` is bootstrapped as Administrator/Teacher.
   - Teachers can manage their profile and published content.

2. **Lab Content Protection**:
   - All authenticated students and teachers can read `published` content.
   - Only teachers and admins can create, update, or delete content items (`/content/{contentId}`).
   - Draft content can only be read by the authoring teacher or admin.
   - Content author ID must match `request.auth.uid` upon creation.
   - Grades must strictly be integers between 1 and 12.
   - Languages must be restricted to `'english' | 'hindi' | 'sanskrit'`.
   - Sections must be restricted to `'reading' | 'pronunciation' | 'listening' | 'grammar'`.

3. **User Progress Isolation**:
   - A student can only write and read their own progress documents (`/userProgress/{progressId}` where `resource.data.userId == request.auth.uid`).
   - Teachers and admins can inspect student progress records for learning analytics.

---

## 2. The "Dirty Dozen" Payloads (Adversarial Tests)

1. **Self-Escalation**: Student modifies `/users/{studentId}` setting `role: "admin"` or `role: "teacher"`. -> **DENIED**
2. **Ghost Profile Creation**: User `uid_A` attempts to create `/users/uid_B`. -> **DENIED**
3. **Student Content Injection**: Authenticated student attempts to create a document in `/content/{contentId}`. -> **DENIED**
4. **Teacher Identity Impersonation**: Teacher `uid_A` attempts to create content with `authorId: "uid_B"`. -> **DENIED**
5. **Unauthorized Content Deletion**: Student attempts to delete `/content/{contentId}`. -> **DENIED**
6. **Student Draft Snooping**: Student attempts to read unpublished draft content owned by a teacher. -> **DENIED**
7. **Cross-User Progress Tampering**: Student `uid_A` writes a progress record with `userId: "uid_B"`. -> **DENIED**
8. **Cross-User Progress Espionage**: Student `uid_A` reads progress records belonging to student `uid_B`. -> **DENIED**
9. **Invalid Grade Range Injection**: Teacher creates content with `classGrade: 99` (violating 1-12 boundary). -> **DENIED**
10. **Unsupported Language Injection**: Teacher creates content with `language: "klingon"`. -> **DENIED**
11. **Malicious Giant Payload (Denial of Wallet)**: Injecting 2MB strings into title or content body. -> **DENIED**
12. **Unauthenticated Content Write**: Unauthenticated user attempts to write to `/content` or `/users`. -> **DENIED**

---

## 3. Test Runner Invariant Checks
All operations in the test suite must assert rejection on the above payloads when evaluated against `firestore.rules`.
