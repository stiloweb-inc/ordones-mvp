import { MessageSquareMore, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function UsersReviews() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>
          <span className="flex items-center gap-2">
            <MessageSquareMore className="text-primary" />
            Opiniões do produto
          </span>
        </CardTitle>
      </CardHeader>
      <div className="px-6">
        <Separator />
      </div>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="flex flex-col w-full gap-4">
            <div className="flex items-center gap-2">
              <span className="text-primary text-5xl font-semibold">4.9</span>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-1 text-primary">
                  <Star className="size-4" fill="#ffcf29" />
                  <Star className="size-4" fill="#ffcf29" />
                  <Star className="size-4" fill="#ffcf29" />
                  <Star className="size-4" fill="#ffcf29" />
                  <Star className="size-4" fill="#ffcf29" />
                </div>
                <span className="text-xs text-muted-foreground">
                  124 avaliações
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center gap-2">
                <Progress value={70} />
                <span className="text-xs font-normal text-muted-foreground">
                  5
                </span>
                <Star className="text-muted-foreground size-3" fill="#b4b4b4" />
              </div>
              <div className="flex items-center gap-2">
                <Progress value={70} />
                <span className="text-xs font-normal text-muted-foreground">
                  4
                </span>
                <Star className="text-muted-foreground size-3" fill="#b4b4b4" />
              </div>
              <div className="flex items-center gap-2">
                <Progress value={70} />
                <span className="text-xs font-normal text-muted-foreground">
                  3
                </span>
                <Star className="text-muted-foreground size-3" fill="#b4b4b4" />
              </div>
              <div className="flex items-center gap-2">
                <Progress value={70} />
                <span className="text-xs font-normal text-muted-foreground">
                  2
                </span>
                <Star className="text-muted-foreground size-3" fill="#b4b4b4" />
              </div>
              <div className="flex items-center gap-2">
                <Progress value={70} />
                <span className="text-xs font-normal text-muted-foreground">
                  1
                </span>
                <Star className="text-muted-foreground size-3" fill="#b4b4b4" />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col w-full gap-4">
            <ReviewCard />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center w-full">
        <Button variant="link">Ver todas as avaliações</Button>
      </CardFooter>
    </Card>
  );
}

export function ReviewCard() {
  return (
    <div className="flex flex-col w-full gap-4 bg-accent/30 rounded-lg p-6">
      <div className="flex items-center gap-2">
        <div className="size-10 bg-accent rounded-full"></div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Cristian Freitas</span>
          <span className="text-xs font-normal text-muted-foreground">
            Desenvolvedor
          </span>
        </div>
      </div>
      <span className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </span>
      <div className="flex items-center gap-1 text-primary">
        <Star className="size-3" fill="#ffcf29" />
        <Star className="size-3" fill="#ffcf29" />
        <Star className="size-3" fill="#ffcf29" />
        <Star className="size-3" fill="#ffcf29" />
        <Star className="size-3" />
      </div>
    </div>
  );
}
