# Taskmaster + CodeRabbit Demo Guide 🚀

## Demo Overview (6-8 minutes total)

This demo showcases how **Taskmaster AI** and **CodeRabbit** work together to streamline development workflows, from requirements to code review.

## What's Been Prepared

### 1. Comprehensive PRD with Technical Constraints
- **File**: `.taskmaster/docs/prd.txt`
- **Features**: Complete PRD for a Task Management App
- **Technical Stack**: React 18, TypeScript, Vite, Tailwind CSS, Zustand
- **Cursor Rules**: Defined in `.cursorrules` with strict development standards

### 2. Generated Tasks from PRD
- **8 main tasks** automatically generated from PRD
- **Task 2 expanded** into 4 subtasks for detailed implementation
- **Dependencies mapped** showing logical task progression

### 3. Sample Implementation
- **TypeScript interfaces** implemented following cursor rules
- **Proper documentation** with JSDoc comments
- **Type safety** with strict TypeScript configuration
- **Ready for CodeRabbit review**

## Demo Flow

### Phase 1: Requirements to Tasks (2 minutes)

1. **Show the PRD** (30 seconds)
   ```bash
   # Display the comprehensive PRD
   cat .taskmaster/docs/prd.txt | head -30
   ```
   
   **Key Points to Highlight:**
   - Technical constraints clearly defined
   - Technology stack specified
   - References cursor rules for development standards
   - Realistic project scope

2. **Show Generated Tasks** (1 minute)
   ```bash
   # Show all tasks generated from PRD
   npm run taskmaster get-tasks
   ```
   
   **Key Points to Highlight:**
   - 8 tasks automatically generated from PRD
   - Dependencies properly mapped
   - Priority levels assigned
   - Ready for development

3. **Show Task Expansion** (30 seconds)
   ```bash
   # Show expanded subtasks for Task 2
   npm run taskmaster get-task --id 2
   ```
   
   **Key Points to Highlight:**
   - Complex tasks broken into manageable subtasks
   - Implementation details provided
   - Test strategies included

### Phase 2: Development Following Standards (2 minutes)

1. **Show Cursor Rules** (30 seconds)
   ```bash
   # Display development standards
   cat .cursorrules | head -20
   ```
   
   **Key Points to Highlight:**
   - Comprehensive development standards
   - TypeScript strict mode required
   - Component guidelines specified
   - Accessibility requirements

2. **Show Implemented Code** (1 minute)
   ```bash
   # Show the TypeScript interfaces
   cat src/types/index.ts
   ```
   
   **Key Points to Highlight:**
   - Follows cursor rules exactly
   - Proper TypeScript interfaces
   - JSDoc documentation
   - Type safety with 'as const'

3. **Update Task Status** (30 seconds)
   ```bash
   # Mark subtask as completed
   npm run taskmaster set-status --id 2.1 --status done
   ```

### Phase 3: CodeRabbit Review Demo (2-3 minutes)

1. **Show Commit History** (30 seconds)
   ```bash
   git log --oneline -3
   ```
   
   **Key Points to Highlight:**
   - Detailed commit messages
   - Conventional commit format
   - Clear feature description

2. **CodeRabbit Analysis Demo** (1-2 minutes)
   - Show how CodeRabbit would analyze the TypeScript interfaces
   - Demonstrate code quality suggestions
   - Show security and best practice recommendations
   
   **Expected CodeRabbit Feedback:**
   - ✅ Proper TypeScript interfaces
   - ✅ Good use of 'as const' for type inference
   - ✅ Comprehensive JSDoc documentation
   - ✅ Following consistent naming conventions
   - ⚠️ Might suggest adding more specific type guards
   - ⚠️ Could recommend additional validation

3. **Pull Request Demo** (1 minute)
   ```bash
   git checkout master
   # Create PR from feature/typescript-interfaces
   ```
   
   **Key Points to Highlight:**
   - CodeRabbit reviews entire PR context
   - Provides suggestions across multiple files
   - Checks for consistency with project standards

## Key Demo Messages

### Taskmaster Value Proposition
- **Time Saving**: Converts PRD to actionable tasks in seconds
- **Consistency**: Follows defined technical constraints
- **Scalability**: Handles complex projects with dependencies
- **Integration**: Works with existing development workflows

### CodeRabbit Value Proposition
- **Quality Assurance**: Catches issues before human review
- **Consistency**: Enforces coding standards automatically
- **Learning**: Provides educational feedback
- **Speed**: Instant feedback on commits and PRs

## Advanced Demo Options

### Option 1: Live Task Creation (Add 2 minutes)
```bash
# Add a new task based on requirements
npm run taskmaster add-task --prompt "Add dark mode toggle component"
```

### Option 2: Research Integration (Add 1 minute)
```bash
# Use research capabilities for informed decisions
npm run taskmaster research --query "Best practices for React TypeScript interfaces"
```

### Option 3: Complex Task Expansion (Add 1 minute)
```bash
# Expand another task to show subtask generation
npm run taskmaster expand-task --id 3 --num 5
```

## Files to Showcase

1. **`.taskmaster/docs/prd.txt`** - Comprehensive PRD
2. **`.cursorrules`** - Development standards
3. **`src/types/index.ts`** - Implementation following standards
4. **`.taskmaster/tasks/tasks.json`** - Generated task structure
5. **`package.json`** - Project setup
6. **`tsconfig.json`** - TypeScript strict configuration

## Demo Tips

1. **Keep it moving** - 6-8 minutes total, practice transitions
2. **Highlight integration** - Show how tools work together
3. **Use real examples** - Don't use toy problems
4. **Show value immediately** - Lead with time-saving benefits
5. **Be prepared for questions** - Know the generated tasks well

## Audience-Specific Adjustments

### For Developers
- Focus on code quality and standards enforcement
- Show how cursor rules integrate with their workflow
- Emphasize TypeScript strict mode benefits

### For Project Managers
- Focus on time savings and task organization
- Show dependency management
- Highlight consistent project standards

### For CTOs/Technical Leaders
- Focus on scalability and consistency
- Show how it enforces best practices
- Highlight integration with existing tools

## Next Steps After Demo

1. **Install Taskmaster**: Show installation process
2. **Set up CodeRabbit**: GitHub integration steps
3. **Create first PRD**: Template and guidance
4. **Configure cursor rules**: Team-specific standards

## Troubleshooting

- If Taskmaster commands fail: Check project root path
- If git commands fail: Ensure git is initialized
- If TypeScript errors: Show as feature (strict mode working)
- If demo runs long: Skip advanced options

---

**Remember**: This demo shows real tools solving real problems. The setup is comprehensive but the benefits are immediate and tangible. 