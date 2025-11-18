### Interface vs Type (TypeScript)

- **Extends / Implements**: Interface সাধারণত `extends` বা `implements` এর মাধ্যমে ব্যবহার হয়, Type-ও extend করা যায় তবে কম ব্যবহৃত।
- **Declaration Merging**: Interface একাধিকবার ঘোষণা করলে merge হয়, Type-এ তা সম্ভব নয়।
- **Complex Types**: Type দিয়ে union, tuple, mapped type সহ অনেক complex structure বানানো যায়, Interface শুধু object structure-এর জন্য ভালো।
- **Compatibility**: অনেক ক্ষেত্রে Type ও Interface একে অপরের মতো কাজ করতে পারে, তবে Interface বেশি Object-oriented Design এর জন্য ব্যবহৃত হয়।

### keyof কীওয়ার্ড (TypeScript)

- `keyof` কোনো object টাইপের সকল key-কে একটি union string literal type হিসেবে ফেরত দেয়।
- এটি ব্যবহার করে আমরা নিশ্চিত করতে পারি যে কোনো ফাংশন বা ভেরিয়েবল শুধুমাত্র সেই অবজেক্টের বৈধ key-গুলোকেই গ্রহণ করবে।

#### উদাহরণ:

```ts
type Person = { name: string; age: number; isAdmin: boolean };
type PersonKeys = keyof Person;
// Output: "name" | "age" | "isAdmin"
```
